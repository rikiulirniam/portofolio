import useWindowSize from "../resource/Provider";
import Stack from "../Stack/Stack";
import data from "../resource/index.json"; 
import { imageMap } from "../resource/Images";

export const AboutMe = () => {
      const [width] = useWindowSize();
      const cardWidth = width < 768 ? 300 : 500
      const cardHeight = width < 768 ? 200 : 350

    return (
        <section id='aboutme' className=' bg-gray-50 py-10 flex flex-col items-center justify-center '>
              <div className="flex items-center justify-center flex-col md:flex-row">
                <div className="img-container pe-6 max-w-screen">
                  <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: cardWidth, height: cardHeight }}
                    cardsData={data.images.map((item, i) => ({ id: i, img: imageMap[item.img] || '' }))}
                  />
                </div>
                <div className="aboutme-text-container md:w-[44rem] w-[auto] text-black md:px-8 px-[10%]">
                  <h1 className='md:text-6xl text-4xl font-bold py-4 w-[80%]'>A Few Words About Me</h1>
                  <p className='pb-4  font-medium text-[1.1em]'>{data.about.subheading}</p>
                    <p className='text-[#535353] text-[1em] pb-6'>{data.about.text}</p>
                    

                </div>
              </div>
          </section>
    )
}