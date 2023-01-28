import React from 'react';
import './Gallery.css';
import { images } from '../../constants';
import { RiCloseFill } from 'react-icons/ri';

const Gallery = () => {

    function closeGal() {
        const gal1 = document.getElementById('gal1');
        const gal2 = document.getElementById('gal2');
        const gal3 = document.getElementById('gal3');
        const gal4 = document.getElementById('gal4');
        const gal5 = document.getElementById('gal5');
        const galNum = document.getElementById('galNum');
        const closeGal = document.getElementById('closeGal');
        const galQuote1 = document.getElementById('galQuote1');
        const galQuote2 = document.getElementById('galQuote2');
        const galQuote3 = document.getElementById('galQuote3');
        const galQuote4 = document.getElementById('galQuote4');
        const galQuote5 = document.getElementById('galQuote5');

        gal1.style.display = 'flex';
        gal2.style.display = 'flex';
        gal3.style.display = 'flex';
        gal4.style.display = 'flex';
        gal5.style.display = 'flex';
        galNum.style.display = 'block';
        closeGal.style.display= 'none';

        gal1.classList.remove('active');
        gal2.classList.remove('active');
        gal3.classList.remove('active');
        gal4.classList.remove('active');
        gal5.classList.remove('active');

        galQuote1.style.display ='none';
        galQuote2.style.display ='none';
        galQuote3.style.display ='none';
        galQuote4.style.display ='none';
        galQuote5.style.display ='none';
    }

    function clickGal1() {
        const gal1 = document.getElementById('gal1');
        const gal2 = document.getElementById('gal2');
        const gal3 = document.getElementById('gal3');
        const gal4 = document.getElementById('gal4');
        const gal5 = document.getElementById('gal5');
        const closeGal = document.getElementById('closeGal');
        const galQuote1 = document.getElementById('galQuote1');
        const galQuote2 = document.getElementById('galQuote2');
        const galQuote3 = document.getElementById('galQuote3');
        const galQuote4 = document.getElementById('galQuote4');
        const galQuote5 = document.getElementById('galQuote5');

        gal2.style.display = 'none';
        gal3.style.display = 'none';
        gal4.style.display = 'none';
        gal5.style.display = 'none';
        closeGal.style.display= 'block';

        gal1.classList.add('active');
        gal2.classList.remove('active');
        gal3.classList.remove('active');
        gal4.classList.remove('active');
        gal5.classList.remove('active');

        galQuote1.style.display ='flex';
        galQuote2.style.display ='none';
        galQuote3.style.display ='none';
        galQuote4.style.display ='none';
        galQuote5.style.display ='none';
    }

    function clickGal2() {
        const gal1 = document.getElementById('gal1');
        const gal2 = document.getElementById('gal2');
        const gal3 = document.getElementById('gal3');
        const gal4 = document.getElementById('gal4');
        const gal5 = document.getElementById('gal5');
        const closeGal = document.getElementById('closeGal');
        const galQuote1 = document.getElementById('galQuote1');
        const galQuote2 = document.getElementById('galQuote2');
        const galQuote3 = document.getElementById('galQuote3');
        const galQuote4 = document.getElementById('galQuote4');
        const galQuote5 = document.getElementById('galQuote5');

        gal1.style.display = 'none';
        gal3.style.display = 'none';
        gal4.style.display = 'none';
        gal5.style.display = 'none';
        closeGal.style.display= 'block';

        gal2.classList.add('active');
        gal1.classList.remove('active');
        gal3.classList.remove('active');
        gal4.classList.remove('active');
        gal5.classList.remove('active');

        galQuote1.style.display ='none';
        galQuote2.style.display ='flex';
        galQuote3.style.display ='none';
        galQuote4.style.display ='none';
        galQuote5.style.display ='none';
    }

    function clickGal3() {
        const gal1 = document.getElementById('gal1');
        const gal2 = document.getElementById('gal2');
        const gal3 = document.getElementById('gal3');
        const gal4 = document.getElementById('gal4');
        const gal5 = document.getElementById('gal5');
        const closeGal = document.getElementById('closeGal');
        const galQuote1 = document.getElementById('galQuote1');
        const galQuote2 = document.getElementById('galQuote2');
        const galQuote3 = document.getElementById('galQuote3');
        const galQuote4 = document.getElementById('galQuote4');
        const galQuote5 = document.getElementById('galQuote5');

        gal1.style.display = 'none';
        gal2.style.display = 'none';
        gal4.style.display = 'none';
        gal5.style.display = 'none';
        closeGal.style.display= 'block';

        gal3.classList.add('active');
        gal1.classList.remove('active');
        gal2.classList.remove('active');
        gal4.classList.remove('active');
        gal5.classList.remove('active');

        galQuote1.style.display ='none';
        galQuote2.style.display ='none';
        galQuote3.style.display ='flex';
        galQuote4.style.display ='none';
        galQuote5.style.display ='none';
    }

    function clickGal4() {
        const gal1 = document.getElementById('gal1');
        const gal2 = document.getElementById('gal2');
        const gal3 = document.getElementById('gal3');
        const gal4 = document.getElementById('gal4');
        const gal5 = document.getElementById('gal5');
        const closeGal = document.getElementById('closeGal');
        const galQuote1 = document.getElementById('galQuote1');
        const galQuote2 = document.getElementById('galQuote2');
        const galQuote3 = document.getElementById('galQuote3');
        const galQuote4 = document.getElementById('galQuote4');
        const galQuote5 = document.getElementById('galQuote5');

        gal1.style.display = 'none';
        gal2.style.display = 'none';
        gal3.style.display = 'none';
        gal5.style.display = 'none';
        closeGal.style.display= 'block';

        gal4.classList.add('active');
        gal1.classList.remove('active');
        gal2.classList.remove('active');
        gal3.classList.remove('active');
        gal5.classList.remove('active');

        galQuote1.style.display ='none';
        galQuote2.style.display ='none';
        galQuote3.style.display ='none';
        galQuote4.style.display ='flex';
        galQuote5.style.display ='none';
    }

    function clickGal5() {
        const gal1 = document.getElementById('gal1');
        const gal2 = document.getElementById('gal2');
        const gal3 = document.getElementById('gal3');
        const gal4 = document.getElementById('gal4');
        const gal5 = document.getElementById('gal5');
        const closeGal = document.getElementById('closeGal');
        const galQuote1 = document.getElementById('galQuote1');
        const galQuote2 = document.getElementById('galQuote2');
        const galQuote3 = document.getElementById('galQuote3');
        const galQuote4 = document.getElementById('galQuote4');
        const galQuote5 = document.getElementById('galQuote5');

        gal1.style.display = 'none';
        gal2.style.display = 'none';
        gal3.style.display = 'none';
        gal4.style.display = 'none';
        closeGal.style.display= 'block';

        gal5.classList.add('active');
        gal1.classList.remove('active');
        gal2.classList.remove('active');
        gal3.classList.remove('active');
        gal4.classList.remove('active');

        galQuote1.style.display ='none';
        galQuote2.style.display ='none';
        galQuote3.style.display ='none';
        galQuote4.style.display ='none';
        galQuote5.style.display ='flex';
    }


  return (
    <div className='app__gallery'>
      <div className="app__gallery-container container__size">
        <div className="app__gallery-wrapper">
            <RiCloseFill id='closeGal' onClick={closeGal} />
            {/* 1 */}
            <div id='gal1' className="app__gallery-content"  onClick={clickGal1}>
                <span id='galNum'>1</span>
                <div className="app__gallery-content_img">
                    <img src={images.Gallery01} alt="Gallery01" />
                </div>
                <p id='galQuote1'>"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."<br />  — Thomas Edison, inventor</p>
            </div>
            {/* 2 */}
            <div id='gal2' className="app__gallery-content" onClick={clickGal2}>
                <span id='galNum'>2</span>
                <div className="app__gallery-content_img">
                    <img src={images.Gallery02} alt="Gallery02" />
                </div>
                <p id='galQuote2'>"Success is not final; failure is not fatal: It is the courage to continue that counts." <br />— Winston S. Churchill, former Prime Minister</p>
            </div>
            {/* 3 */}
            <div id='gal3' className="app__gallery-content" onClick={clickGal3}>
                <span id='galNum'>3</span>
                <div className="app__gallery-content_img">
                    <img src={images.Gallery03} alt="Gallery03" />
                </div>
                <p id='galQuote3'>"If you start thinking you are good at something, that's often the day you stop trying to be better and open the back door for someone to come after you. That's why we always aim higher. We never feel like we're done."<br /> — Drew Houston, co-founder and CEO of Dropbox</p>
            </div>
            {/* 4 */}
            <div id='gal4' className="app__gallery-content" onClick={clickGal4}>
                <span id='galNum'>4</span>
                <div className="app__gallery-content_img">
                    <img src={images.Gallery04} alt="Gallery04" />
                </div>
                <p id='galQuote4'>"Success is the sum of small efforts, repeated day in and day out."<br /> — Robert Collier, author</p>
            </div>
            {/* 5 */}
            <div id='gal5' className="app__gallery-content" onClick={clickGal5}>
                <span id='galNum'>5</span>
                <div className="app__gallery-content_img">
                    <img src={images.Gallery05} alt="Gallery05" />
                </div>
                <p id='galQuote5'>"Never confuse a single defeat with a final defeat."<br /> — F. Scott Fitzgerald, author</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
