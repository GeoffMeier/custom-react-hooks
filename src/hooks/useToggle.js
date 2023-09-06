import { useState } from "react";

export const useToggle = initial => {
    const [isToggled, setToggled] = useState(initial);
    const toggle = () => setToggled(prevState => !prevState)

    // Rename output, multiple uses of hook
    // return [isToggled,setToggled,toggle]

    // Named properties, no order in return 
    return {isToggled,setToggled,toggle}
   
   
}