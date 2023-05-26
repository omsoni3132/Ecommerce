import { createApi , fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../../firebase";
import { addDoc , collection , getDocs} from "firebase/firestore";


const CheckApi = createApi({
    reducerPath : "Check",
    baseQuery : fakeBaseQuery(),
    tagTypes : ["Check"],
    endpoints(builder){
          return {
              AddCheckOut : builder.mutation({
                 async queryFn(Check){
                    try{
                        await addDoc(collection(db,"Check"),{
                            ...Check,
                        });
                        return{ data : "ok"};
                    }catch(err){
                        const errorMessage = err.message ;
                        return{error : errorMessage};
                    }
                    },
                    invalidatesTags : ["Check"],
                }
              ),
              FatchCheck : builder.query({
                async queryFn(){
                    try{
                        const CheckRef = collection(db , "Check");
                        const QuerySnapShort = await getDocs(CheckRef);

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
    useAddCheckOutMutation ,
    useFatchCheckQuery
} = CheckApi;  

export  {CheckApi};