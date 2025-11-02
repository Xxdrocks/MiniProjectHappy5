import React from 'react'
import taskData from '../constant'
import CreateTaskButton from './CreateTaskButton'
import more from '/assets/images/more-grey.png'
import weight from '/assets/images/weight.png'

const Task = () => {
  return (
    <div className='overflow-x-auto'>
      <div className='flex gap-[16px] max-w-[88vw]'>
        {taskData.map(({ title, year, task }) => (
          <div className='h-fit rounded-[4px] border-[1px] border-[#F2F2F4]'>
            <div className='flex w-[308px] flex-col gap-[16px] p-[12px]'>
              <div className='flex flex-col gap-[4px]'>
                <h1 className='font-Regular text-[12px] text-[#5D6372]'>
                  {title}
                </h1>
                <h2 className='font-SemiBold text-[14px] text-[#5D6372]'>
                  {year}
                </h2>
              </div>
              <div className='flex flex-col gap-[12px]'>
                {task.length > 0 ? (
                  task.map(({ id, task, progress, available }) => (
                    <div>
                      <div className='w-[282px] h-auto border-[1px] border-[#E4E4E8] rounded-[4px] p-[16px] gap-[28px] flex flex-col'>
                        <div>
                          <h1 className='text-[14px] text-[#2F3136] font-SemiBold w-[250px]'>
                            {task}
                          </h1>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                          <div className='flex gap-[8px] items-center'>
                            <img src={weight} alt='progress' className='w-[16px] h-[16px]' />
                            <h1 className=' text-[12px] text-[#5D6372]'>{progress}%</h1>
                          </div>
                          <div className='cursor-pointer'>
                            <img src={more} alt='progress' className='w-[24px] h-[24px]' />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='pt-[8px]'>
                    <p className='font-[14px] font-Regular text-[#B7BDC9]'>No Task Available</p>
                  </div>
                )}
              </div>
             <CreateTaskButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Task
