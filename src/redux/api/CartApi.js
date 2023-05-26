import { createApi , fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../../firebase";
import { addDoc , collection , deleteDoc, doc , getDocs} from "firebase/firestore";


const CartApi = createApi({
      reducerPath : "Cart",
      baseQuery : fakeBaseQuery(),
      tagTypes : ["Cart"],
      
      endpoints(builder){
            return {
                // DeleteCart : builder.mutation({
                //     async queryFn(id){
                //         try{
                //              await deleteDoc(doc(db,"Cart", id));
                //              return { data : "ok"};
                //         }catch(err){
                //             const errorMessage = err.message ;
                //             return{error : errorMessage};
                //         }
                //         },
                //          invalidatesTags : ["Cart"],
                // }),
                DeleteCart: builder.mutation({
                    async queryFn(id) {
                      try {
                        await deleteDoc(doc(db, "Cart", id));
                        return { data: "ok" };
                      } catch (err) {
                        const errorMessage = err.message;
                        return { error: errorMessage };
                      }
                    },
                    invalidatesTags: ["Cart"],
                    async onQueryUpdated({ queryCache }) {
                      await queryCache.invalidateQueries("Cart");
                    }
                  }),
                AddtoCart : builder.mutation({
                       async queryFn(product){
                            try{
                               
                               await addDoc(collection(db,"Cart"),{
                                    ...product,
                                });
                                return{data:"ok"};
                            }catch(err){
                                return {error : err};
                            }
                        },
                        invalidatesTags :["Cart"],
                    }
                ),
                FatchCart : builder.query({
                    async queryFn(){
                        try{
                            const CartRef = collection(db , "Cart");
                            const QuerySnapShort = await getDocs(CartRef);

                            let cart = [] ;
                            QuerySnapShort?.forEach((doc)=>{
                                cart.push({
                                    ID : doc.id ,
                                    ...doc.data()
                                });
                            });

                            return{data : cart};

                        }catch(err){
                            const errorMessage = err.message ;
                            return{error : errorMessage};
                        }
                    }
                }),
                

            }
      }
});

export const {
    useAddtoCartMutation ,
    useFatchCartQuery ,
    useDeleteCartMutation ,
} = CartApi;  

export  {CartApi};