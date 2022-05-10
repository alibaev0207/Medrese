import React from 'react'
import { Container } from 'react-bootstrap'


const Video = () => {
  return (
      <>
      <Container>
          <h2 className='text-center m-5'>Видео уроки</h2>
          <div className='div__video-block'>
              {/* <ReactPlayer url=/> */}
              <div className='div__video-1'>
              <iframe width="350" height="280" src="https://www.youtube.com/embed/p9RfePoVMBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>МАНТЫК ИЛИМИНЕ КИРИШҮҮ. 1-САБАК. Устаз Сулайман Таштанов</p>
              </div>
              <div className='div__video-2'>
              <iframe width="350" height="280"  src="https://www.youtube.com/embed/b6tdBR2WZ2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>МАНТЫК ИЛИМИ. АВТОРДУН КИРИШ СӨЗҮ. 2-САБАК. Устаз Сулайман Таштанов</p>
              </div>
              <div className='div__video-3'>
              <iframe width="350" height="280" src="https://www.youtube.com/embed/Di5DNEcv4Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>МАНТЫК ИЛИМИ. АВТОРДУН КИРИШ СӨЗҮ. 3-САБАК. Устаз Сулайман Таштанов</p>
              </div>
              <div className='div__video-3'>
              <iframe width="350" height="280"  src="https://www.youtube.com/embed/rjp5GBZ2vuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>МАНТЫК ИЛИМИНИН ӨКҮМҮ. 4-САБАК. Устаз Сулайман Таштанов</p>
              </div>              
              <div className='div__video-3'>
              <iframe width="350" height="280" src="https://www.youtube.com/embed/2ZU_uJ8WJK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>МАНТЫК ИЛИМИ. 5-САБАК. ТАСОВВУРОТ ВА ТАСДИКООТ. Устаз Сулайман Таштанов</p>
              </div>
              <div className='div__video-3'>
              <iframe width="350" height="280" src="https://www.youtube.com/embed/Eo3Ue2Xb224" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>МАНТЫК ИЛИМИ. 6-САБАК. ДИЛАЛАНЫН ТҮРЛӨРҮ. (1-БӨЛҮМ). Устаз Сулайман Таштанов</p>
              </div>              
              <div className='div__video-3'>
              <iframe width="350" height="280" src="https://www.youtube.com/embed/bBxsFzAdXpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>МАНТЫК ИЛИМИ. 7-САБАК. ДИЛАЛАНЫН ТҮРЛӨРҮ. (2-БӨЛҮМ). Устаз Сулайман Таштанов</p>
              </div>              
              <div className='div__video-3'>
              <iframe width="350" height="280" src="https://www.youtube.com/embed/__Y4A7Ua3Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>МАНТЫК ИЛИМИ. 8-САБАК. СӨЗДӨРДҮ ИЗИЛДӨӨ. Устаз Сулайман Таштанов</p>
              </div>              
              <div className='div__video-3'>
              <iframe width="350" height="280" src="https://www.youtube.com/embed/TTcLPEqsrm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>МАНТЫК ИЛИМИ. 9-САБАК. КУЛЛИЯТУЛ ХАМС ТУУРАЛУУ. Устаз Сулайман Таштанов</p>
              </div>
          </div>
      </Container>
      </>
  )
}

export default Video