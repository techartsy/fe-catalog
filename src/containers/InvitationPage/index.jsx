import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Carousel from 'react-material-ui-carousel'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { isMobile } from 'react-device-detect';
import 'react-slideshow-image/dist/styles.css'
import 'sweetalert2/src/sweetalert2.scss';

import icon1 from '../../static/images/1.png';
import icon2 from '../../static/images/2.png';
import icon3 from '../../static/images/3.png';
import icon4 from '../../static/images/4.png';
import ilustrationHand from '../../static/images/hand.png';
import comproTitle from '../../static/images/compro.png';
import productCompro from '../../static/images/product-compro.png';
import mobileAppsTitle from '../../static/images/apps.png';
import serviceTitle from '../../static/images/service.png';

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
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658587841/catalog/About-_1__zkaw3c.webp'
    },
    {
      name: 'contact us',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658587843/catalog/Contact-_2__ppbeve.webp'
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
    {
      name: 'item 4',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658587640/catalog/c1_odp5zx.webp',
    },
  ]

  const wa = () => {
    window.open('https://api.whatsapp.com/send?phone=628159001890', '_blank');
  };
  const ikatik = () => {
    window.open('https://ikatik.com/', '_blank');
  };
  const techartsy = () => {
    window.open('https://www.techartsyindonesia.com/', '_blank');
  };

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
          <div className={classes.bgWrapper}>
            <div className={classes.bg1} />
            <div className={classes.bg2} />
            <div className={classes.bg3} />
          </div>
          <div className={classes.wrapper}>
            <div className={classes.detail}>
              <img src={comproTitle} className={classes.comproTitle} alt="Company Profile" />
              <img src={productCompro} className={classes.productCompro} alt="Compro Product" />
            </div>
          </div>
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
          <div className={classes.appDescWrapper}>
            <div className={classes.appsDesc}>
              <img src={ (isMobile || width === 'sm' ) ? icon4 : icon3} className={classes.icon} alt="icon" />
              <p>
                https://www.codelabs.co.id/website_content/index/64<br/>
                https://www.ikatik.com/<br/>
                Bagi kamu yang memiliki bisnis, Jika ingin meningkatkan peluang<br/> menarik pelanggan, cobalah membuat hal ini
              </p>
            </div>
          </div>
        </div>
        <div className={classes.rightSection}>
          <img className={classes.mobileTitle} src={mobileAppsTitle} alt="Mobile Apps Development" />
          <div className={classes.productWrapper}>
            <img className={classes.mobileProduct} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658589334/catalog/Mobile-_1__ngk6tq.webp" alt="Mobile" />
            <img className={classes.desktopProduct} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658589333/catalog/Laptop-_1__lurblk.webp" alt="Desktop" />
          </div>
        </div>
      </div>
    )
  }

  const generateServiceSection = () => {
    return (
      <div className={classes.serviceContainer}>
        <div className={classes.leftSide}>
          <div className={classes.top}>
            <img src={serviceTitle} className={classes.serviceTitle} alt="Servis Komputer" />
            <img src={ilustrationHand} className={classes.ilustration} alt="ilustration" />
            <div className={classes.topDesc}>
              <p>
                "Ketika kamu mengalami masalah, kami ada solusinya."<br />
                Jasa Service :<br />
                - Printer<br />
                - Proyektor<br />
                - Laptop
              </p>
            </div>
          </div>
          <div className={classes.laptopWrapper}>
            <div className={classes.imgWrapper}>
              <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658594092/catalog/Laptop_2_xtlw9w.webp" alt="laptop" />
            </div>
          </div>
          <div className={classes.bottom}>
            <p>Authorized Partner : Epson, Brother</p>
          </div>
        </div>
        <div className={classes.mid}>
          <div className={classes.imgWrapper}>
            <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/Projector_upmm56.webp" alt="projector" className={classes.projector} />
            <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/Printer_wbf2nw.webp" alt="printer" className={classes.printer} />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.top}>
            <div className={classes.background} />
            <img className={classes.ilustration} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/HP_r7laib.webp" alt="ilustration" />
          </div>
          <div className={classes.bottom}>
            <div className={classes.scopeDesc}>
              <p>
                Meliputi :<br/>
                - Upgrade<br/>
                - Perbaikan<br/>
                - Penjualan spare part<br/>
                - Kontrak Maintenance
              </p>
            </div>
            <img className={classes.brand} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/brands_cbloew.webp" alt="brand" />
          </div>
        </div>
      </div>
    )
  }
  const generateTestimony = () => {
    return (
      <div className={classes.testimonyContainer}>
        <div className={classes.testimonyWrapper}>
          <div className={classes.background}>

          </div>
        </div>
      </div>
    )
  }

  const generateFooter = () => {
    return (
      <div className={classes.footerContainer}>
        <div className={classes.leftSection}>
          <img className={classes.medsosIlustration} src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658592452/catalog/medsos_fgvkdv.webp' />
          <div className={classes.contactUsWrpper}>
            <div className={classes.contactUs}>
              <img className={classes.title} src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658592982/catalog/contactus_zmfuru.webp' />
              <div className={classes.contactUsDesc}>
                <p className={classes.subtitle}>ikatik@upnvj.ac.id</p>
                <p className={classes.subtitle}>0815 - 9001 - 890 (Darma Putri)</p>
                <p className={classes.subtitle}>https://www.ikatik.com/</p>
                <p className={classes.subtitle}>Ikatan Alumni Informatika Dan Komputer</p>
              </div>
            </div>
            <div className={classes.iconClick}>
              <img className={classes.icon} onClick={wa}
                src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658593649/catalog/WA_w4qlon.webp' />
              <img className={classes.icon} onClick={ikatik}
                src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658593710/catalog/LOGO_mgxkgm.webp' />
              <a
              href="mailto:ikatik@upnvj.ac.id"
              target="_blank"
              rel="noreferrer"
              >
                <img className={classes.icon}
                src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658593710/catalog/Mail_js5w6q.webp' />
              </a>
            </div>
          </div>
          <div className={classes.colaboration}>
            <p className={classes.title}>In Colaboration</p>
            <img className={classes.techartsy} onClick={techartsy}
            src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658417366/Asset%20Techartsy%20Indonesia/Logo/Techartsy_Gold_af8szn.png' />
          </div>
        </div>
        <div className={classes.rightSection}>
          <div className={classes.maps}>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5167166490132!2d106.8113054!3d-6.3270202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef3c9bb019b1%3A0xbe14abc25d2e3d55!2sStudio%20J76!5e0!3m2!1sid!2sid!4v1658594424051!5m2!1sid!2sid" 
            width={width === 'lg' ? "540" : '320'}
            height={width === 'lg' ? "500" : '300'}
            style={{ border: "1px solid black" }}
            allowFullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    );
  };

  const generateInvitation = () => {
    return (
      <div className={classes.invitationContainer}>
        {generateSlideShow()}
        {generateComproSection()}
        {generateComproSlideShow()}
        {generateMobileAppsDev()}
        {generateServiceSection()}
        {generateTestimony()}
        {generateFooter()}
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