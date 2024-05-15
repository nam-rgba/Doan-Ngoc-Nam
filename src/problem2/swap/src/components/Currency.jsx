import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { useDropdown } from '../hooks/useDropdown';
import './sc.css'
import { seperateNumber } from '../utils/utils';


export default function Currency({currency, changeCurrency, allCurrencies, init, setInit}) {
    
    const [isOpen, dropdownRef, toggleDropdown] = useDropdown(false);
    const [isFocus, focusRef, toggleFocus] = useDropdown(false);
    const [bef, aft] = seperateNumber(init*currency.price);

  return (
    <div className='w-full h-[10rem] rounded-2xl bg-[#378ca1] p-4 text-white flex flex-col'>
        <div 
        className='w-[10rem] h-[2.1rem] bg-[#006b8b] cursor-pointer rounded-[calc(1rem+1rem)] flex flex-row items-center p-[0.3rem] relative' 
        ref={dropdownRef} 
        onClick={toggleDropdown}>
            <img src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency.currency}.svg`} alt="coins" />
            <p className='w-full text-left pl-[0.3rem] text-xl'>{currency.currency}</p>
            <FaCaretDown size={20} className='pr-[0.3rem]' />
            {
                isOpen && (
                    <div className='absolute w-[7.4rem]  bg-[#006b8b] rounded-[0.4rem] top-10 left-0 h-[10rem] overflow-y-scroll' id='sc'>
                        {
                            allCurrencies.map((coin, index)=>(
                                <div key={index} onClick={()=>changeCurrency(coin)} className='w-full h-[2.1rem] bg-[#006b8b] cursor-pointer  flex flex-row items-center p-[0.3rem] hover:bg-[#378ca1]'>
                                    {coin.currency}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
        <div className='w-full flex flex-row mt-2 ml-4' >
            {
                isFocus ? (
                    <input 
                    ref={focusRef} 
                    className='bg-transparent w-full transition-all focus:outline-none text-3xl text-white border-b-2 border-[#006b8b]'
                    autoFocus
                    value={
                        currency.price*init
                    }
                    onChange={(e)=>
                        {
                             let value = e.target.value
                        setInit(value/currency.price)
                        }
                    }
                    type='number'
                    step='any'
                    />
                ) : (
                    <div className='w-[8rem]  ' onClick={toggleFocus}>
                        <div className='text-3xl'>{bef}.</div>
                        <div className='text-base'>{aft?aft:'00'}</div>
                    </div>
                )
            }
        </div>
    </div>
  )
}
