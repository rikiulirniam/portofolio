import data from "../resource/index.json"

export const Timeline = () => {
    return (
        <section  id='timeline' className='flex justify-center flex-col items-center bg-[#ffffff] text-black'>
            <div className="flex justify-center flex-wrap py-8 gap-4">
            {data && data.pengalaman.map((item, key) => (

              <div className="flex flex-col  border- p-5 w-72 " key={key} >
                <p className='text-[0.8em] font-medium'>{item.tag}</p>
                <div className="flex items-center py-2">
                  <h2 className='text-5xl font-bold text-[#464646ab] '>
                    {item.year}
                  </h2>
                </div>
                  <p className='pb-4  font-medium text-[1em]'>{item.subheading}</p>
                  <p className='text-[#535353] text-[0.9em]'>{item.text}</p>
              </div>
              ))}
            </div>
          </section>
    )
}