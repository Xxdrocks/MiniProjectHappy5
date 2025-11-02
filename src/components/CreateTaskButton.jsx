import React from 'react'
import plus from '/assets/images/plus-purple.png'

const CreateTaskButton = () => {
    return (
        <button className='w-[145px] h-[36px] flex cursor-pointer gap-[8px] items-center'>
            <img src={plus} alt='progress' className='w-[16px] h-[16px]' />
            <p className="cursor-pointer font-Regular text-[14px] text-[#2F3136]">
                Create New Task
            </p>
        </button>
    )
}

export default CreateTaskButton
