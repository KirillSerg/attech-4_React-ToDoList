import { useSelector, TypedUseSelectorHook } from "react-redux";
import { AllReducersState } from "../reducers";


export const useTypedSelector: TypedUseSelectorHook<AllReducersState> = useSelector