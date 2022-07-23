import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Carousel from 'react-material-ui-carousel'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'react-slideshow-image/dist/styles.css'
import 'sweetalert2/src/sweetalert2.scss';

import icon1 from '../../static/images/1.png';
import icon2 from '../../static/images/2.png';
import icon3 from '../../static/images/3.png';
import comproTitle from '../../static/images/compro.png';
import productCompro from '../../static/images/product-compro.png';
import mobileAppsTitle from '../../static/images/apps.png';

import {
  getTestimony,
  postTestimony,
} from '../../store/actions';

import useWindowDimensions from '../../utils/useWindowDimensions';
import StartedComponent from '../../components/Started';
import AudioComponent from '../../components/AudioPlayer';

import classes from './style.module.scss';

const InvitationPage = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  
  const responseTestimony = useSelector(state => state.catalogReducer.responseTestimony);

  const slideImages = [
    {
      name: 'present',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1657648350/catalog/Present_cwyhwg.webp'
    },
    {
      name: 'about us',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1657649553/catalog/About_pb1tvt.webp'
    },
    {
      name: 'contact us',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1657813775/catalog/Contact-_1__nmhtwp.webp'
    },
  ]

  const comproItem = [
    {
      name: 'item 1',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1657810283/catalog/7-1_1_f8vffc.webp',
    },
    {
      name: 'item 2',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1657811472/catalog/6_yc2rn5.webp',
    },
    {
      name: 'item 3',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1657810283/catalog/5-1_vtxqd9.webp',
    },
  ]

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  useEffect(() => {
    dispatch(getTestimony());
  }, []);

  const sendTestimony = () => {
    const payload = {
      name: 'cobaaa',
      message: 'coba kirim testimony FE',
      info: 'Depok',
      institution: 'Techartsy Indonesia',
      pauseOnHover: false,
      arrows: false,
    }
    dispatch(postTestimony(payload))
  };

  const openInvitation = () => {
    setIsInvitationOpen(!isInvitationOpen);
    setIsPlaying(!isPlaying);
  };

  const generateSlideShow = () => {
    const props = {
      interval: 4000,
      duration: 1000,
      stopAutoPlayOnHover: false,
      swipe: true,
    }
    return (
      <div className={classes.slideContainer}>
        <Carousel {...props}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: '#2B44CB',
              color: '#2B44CB',
              width: '25px',
              height: '10px',
              borderRadius: '20px',
              top: width === 'sm' && '-4px'
            }
          }}
          indicatorIconButtonProps={{
            style: {
              height: width === 'sm' ? '4px' : '10px',
              width: width === 'sm' ? '4px' : '10px',
              zIndex: '1',
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: width === 'sm' ? '-12%' : '-6%',
            }
          }}
          indicatorContainerProps={{
            style: {
              marginRight: '50%',
              width: '80%',
              display: 'flex',
              justifyContent: 'flex-end',
              justifySelf: 'flex-end',
              fontSize: '2px'
            }
          }}
        >
          {slideImages.map((item) => {
            return (
              <div className="each-slide">
                <img className={classes.image} src={item.imgUrl} alt={item.name} />
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  };

  const generateComproSection = () => {
    return (
      <div className={classes.comproSectionContainer}>
        <div className={classes.leftSection}>
          <img src={comproTitle} className={classes.comproTitle} alt="Company Profile" />
          <img src={productCompro} className={classes.productCompro} alt="Compro Product" />
        </div>
        <div className={classes.rightSection}>
          <img src={icon2} className={classes.desktopIcon} alt="icon" />
          <div className={classes.comproDesc}>
            <p>
              Sebuah Company Profile bisa menjadi alat untuk menyampaikan informasi perusahaan,
              Visi Misi, dan juga kisah berdirinya perusahaan. Media ini dapat meningkatkan brand awareness pelanggan juga menarik perhatian investor.
            </p>
          </div>
          <img src={icon1} className={classes.icon1} alt="icon" />
        </div>
      </div>
    )
  }

  const generateComproSlideShow = () => {
    return (
      <div className={classes.comproSlideContainer}>
        <div className={classes.sliderWrapper}>
          {comproItem.map((item) => {
            return (
              <div className="each-slide">
                <img className={classes.image} src={item.imgUrl} alt={item.name} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const generateMobileAppsDev = () => {
    return (
      <div className={classes.mobileAppsContainer}>
        <div className={classes.leftSection}>
          <div className={classes.appsDesc}>
            <img src={icon3} className={classes.icon} alt="icon" />
            <p>
              https://www.codelabs.co.id/website_content/index/64<br/>
              https://www.ikatik.com/<br/>
              Bagi kamu yang memiliki bisnis, Jika ingin meningkatkan peluang<br/> menarik pelanggan, cobalah membuat hal inii
            </p>
          </div>
        </div>
        <div className={classes.rightSection}>
          <img className={classes.mobileTitle} src={mobileAppsTitle} alt="Mobile Apps Development" />
          <div className={classes.productWrapper}>
            <img className={classes.mobileProduct} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1657814010/catalog/Mobile_zcmy0u.webp" alt="Mobile" />
            <img className={classes.desktopProduct} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1657814011/catalog/Laptop_o46l4t.webp" alt="Desktop" />
          </div>
        </div>
      </div>
    )
  }

  const generateInvitation = () => {
    return (
      <div className={classes.invitationContainer}>
        {generateSlideShow()}
        {generateComproSection()}
        {generateComproSlideShow()}
        {generateMobileAppsDev()}
        {/* <AudioComponent isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> */}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {/* {!isInvitationOpen ? <StartedComponent openInvitation={openInvitation} /> : generateInvitation()} */}
      {generateInvitation()}
    </div>
  );
};

export default InvitationPage;