import { useState, useRef, useCallback, useEffect } from "react";

export const useDropdown=(initialState)=>{
    const [isOpen, setIsOpen] = useState(initialState);

    const dropdownRef= useRef(null);

    const handleClickOutSide=useCallback((e)=>{
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
            setIsOpen(false);
        }
    },[dropdownRef, setIsOpen]);

    const toggleDropdown=useCallback(()=>{
        setIsOpen(prev=>!prev);
    },[setIsOpen]);

    useEffect(()=>{
        document.addEventListener('mousedown',handleClickOutSide, true);
        return ()=>{
            document.removeEventListener('mousedown',handleClickOutSide, true);
        }
    },[handleClickOutSide]);
    return [isOpen, dropdownRef, toggleDropdown];
}