import data from "../resource/index.json"

export const Timeline = () => {
    return (
        <section  id='timeline' className='flex justify-center flex-col items-center bg-[#ffffff] text-black'>
            <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 py-8 gap-2 md:gap-4">
            {data && data.pengalaman.map((item, key) => (

              <div className="flex flex-col  border- p-5 " key={key} >
                <p className='md:text-[0.8em] text-xs font-medium'>{item.tag}</p>
                <div className="flex items-center py-2">
                  <h2 className='md:text-5xl text-2xl font-bold text-[#464646ab] '>
                    {item.year}
                  </h2>
                </div>
                  <p className='pb-4  font-medium text-md md:text-[1em]'>{item.subheading}</p>
                  <p className='text-[#535353] text-justify md:align-left text-xs md:text-[0.9em]'>{item.text}</p>
              </div>
              ))}
            </div>
          </section>
    )
}