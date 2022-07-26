import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Carousel from 'react-material-ui-carousel'
import { useDispatch, useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import Alert from '@mui/material/Alert';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import 'react-slideshow-image/dist/styles.css'
import 'sweetalert2/src/sweetalert2.scss';

import icon1 from '../../static/images/1.png';
import icon2 from '../../static/images/2.png';
import icon3 from '../../static/images/3.png';
    import productCompro from '../../static/images/product-compro.png';
import icon4 from '../../static/images/4.png';
import ilustrationHand from '../../static/images/hand.png';
import comproTitle from '../../static/images/compro.png';
import mobileAppsTitle from '../../static/images/apps.png';
import serviceTitle from '../../static/images/service.png';
import designTitle from '../../static/images/design.png';
import ilustrationDesignGraphics from '../../static/images/ilustration1.png';
import ilustrationIcon from '../../static/images/ilustration2.png';
import Popup from '../../components/Popup';

import {
  getTestimony,
  postTestimony,
} from '../../store/actions';

import useWindowDimensions from '../../utils/useWindowDimensions';
import AudioComponent from '../../components/AudioPlayer';

import classes from './style.module.scss';

const CatalogPage = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [institution, setInstitution] = useState('');
  const [message, setMessage] = useState('');
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [popupShow, setPopupShow] = useState(true);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  let count = 0;

  useEffect(() => {
    if (successAlert) {
      setTimeout(() => {
        setSuccessAlert(false)
      }, 3000);
    } else {
      setTimeout(() => {
        setErrorAlert(false)
      }, 3000);
    }
  }, [errorAlert, successAlert])
  
  const responseTestimony = useSelector(state => state.catalogReducer.responseTestimony);

  const slideImages = [
    {
      name: 'present',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1657648350/catalog/Present_cwyhwg.webp'
    },
    {
      name: 'about us',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658764098/catalog/About_2_sg0n1e.webp'
    },
    {
      name: 'contact us',
      imgUrl: 'https://res.cloudinary.com/dwvzfit8v/image/upload/v1658764098/catalog/Contact_3_euss3h.webp'
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

  const ig = () => {
    window.open('https://www.instagram.com/ikatik.upnvj_official/', '_blank');
  };

  const techartsy = () => {
    window.open('https://www.techartsyindonesia.com/', '_blank');
  };

  useEffect(() => {
    dispatch(getTestimony());
  }, []);

  const resetForm = () => {
    setName('');
    setInfo('');
    setInstitution('');
    setMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      info,
      institution,
      message,
    };
    dispatch(postTestimony(
      payload,
      () => setErrorAlert(true),
      () => {
        setSuccessAlert(true);
        resetForm();
      }
    ));
  };

  const openInvitation = () => {
    setPopupShow(!popupShow);
    setIsPlaying(!isPlaying);
  };

  const generateSlideShow = () => {
    const props = {
      interval: 4000,
      duration: 1000,
      stopAutoPlayOnHover: false,
      swipe: true,
    };
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
    );
  };

  const generateComproSection = () => {
    return (
      <div className={classes.comproSectionContainer}>
        <Fade delay={500} duration={2000} left>
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
        </Fade>
        <div className={classes.rightSection}>
          <Fade delay={500} duration={2000} right>
            <img src={icon2} className={classes.desktopIcon} alt="icon" />
            <div className={classes.comproDesc}>
              <p>
                Sebuah Company Profile bisa menjadi alat untuk menyampaikan informasi perusahaan,
                Visi Misi, dan juga kisah berdirinya perusahaan. Media ini dapat meningkatkan brand awareness pelanggan juga menarik perhatian investor.
              </p>
            </div>
            <img src={icon1} className={classes.icon1} alt="icon" />
          </Fade>
        </div>
      </div>
    );
  };

  const generateComproSlideShow = () => {
    return (
      <div className={classes.comproSlideContainer}>
          <div className={classes.sliderWrapper}>
            {comproItem.map((item, idx) => {
              return (
                <Zoom delay={idx*300} duration={2500}>
                <div className="each-slide">
                  <img className={classes.image} src={item.imgUrl} alt={item.name} />
                </div>
                </Zoom>
              )
            })}
          </div>
      </div>
    );
  };

  const generateMobileAppsDev = () => {
    return (
      <div className={classes.mobileAppsContainer}>
        <Fade left delay={500} duration={2000}>
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
        </Fade>
        <Fade right delay={500} duration={2000}>
          <div className={classes.rightSection}>
            <img className={classes.mobileTitle} src={mobileAppsTitle} alt="Mobile Apps Development" />
            <div className={classes.productWrapper}>
              <img className={classes.mobileProduct} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658589334/catalog/Mobile-_1__ngk6tq.webp" alt="Mobile" />
              <img className={classes.desktopProduct} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658589333/catalog/Laptop-_1__lurblk.webp" alt="Desktop" />
            </div>
          </div>
        </Fade>
      </div>
    );
  };

  const generateServiceSection = () => {
    return (
      <div className={classes.serviceContainer}>
        <div className={classes.leftSide}>
          <Fade left duration={2000} delay={500}>
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
          </Fade>
        </div>
        <div className={classes.mid}>
          <div className={classes.imgWrapper}>
            <Zoom delay={1500} duration={2000}>
              <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/Projector_upmm56.webp" alt="projector" className={classes.projector} />
            </Zoom>
            <Zoom delay={2000} duration={2000}>
              <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/Printer_wbf2nw.webp" alt="printer" className={classes.printer} />
            </Zoom>
          </div>
        </div>
        <div className={classes.right}>
          <Fade top delay={500} duration={2000}>
            <div className={classes.top}>
              <div className={classes.background} />
              <img className={classes.ilustration} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/HP_r7laib.webp" alt="ilustration" />
            </div>
          </Fade>
          <Fade bottom duration={2000} delay={1000}>
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
          </Fade>
        </div>
      </div>
    );
  };

  const generateMobileServiceSection = () => {
    return (
      <div className={classes.mobileServiceContainer}>
        <div className={classes.top}>
          <Fade left duration={2000} delay={1000}>
            <div className={classes.left}>
              <div className={classes.serviceTitleMobile}>
                <img src={serviceTitle} alt="servis komputer" />
              </div>
              <div className={classes.ilustrationMobile}>
                <img src={ilustrationHand} alt="Ilustration"  />
              </div>
              <div className={classes.descMobile}>
                <p>
                  “Ketika kamu mengalami masalah, kami ada solusinya.”<br/>
                  Jasa Servis :<br/>
                  - Printer<br/>
                  - Proyektor<br/>
                  - Laptop
                </p>
              </div>
              <div className={classes.laptopWrapper}>
                <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658594092/catalog/Laptop_2_xtlw9w.webp" alt="laptop" />
              </div>
            </div>
          </Fade>
          <div className={classes.topMid}>
            <div className={classes.imgWrapper}>
              <Zoom duration={2000} delay={1000}>
                <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/Projector_upmm56.webp" alt="projector" className={classes.projector} />
              </Zoom>
            </div>
          </div>
          <div className={classes.topRight}>
            <Fade top duration={2000} delay={500}>
              <div className={classes.emptyColumn} />
            </Fade>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.bottomLeft}>
            <Fade left duration={2000} delay={500}>
              <div className={classes.bottomEmptyColumn} />
            </Fade>
          </div>
          <div className={classes.bottomMid}>
            <div className={classes.imgWrapper}>
              <Zoom duration={2000} delay={1500}>
                <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/Printer_wbf2nw.webp" alt="printer" className={classes.printer} />
              </Zoom>
            </div>
          </div>
          <Fade bottom duration={2000} delay={1500}>
            <div className={classes.bottomRight}>
              <div className={classes.left}>
                <p>
                Meliputi :<br/>
                - Upgrade<br/>
                - Perbaikan<br/>
                - Perbaikan spare part<br/>
                - Kontrak Maintenance
                </p>
              </div>
              <div className={classes.right}>
                <p>
                  Authorized Partner :<br/>
                  Epson, Brother
                </p>
                <img className={classes.brand} src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658595289/catalog/brands_cbloew.webp" alt="brand" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  };

  const generateDesignGraphics = () => {
    return (
      <div className={classes.designGraphicsContainer}>
        <Fade left duration={2000} delay={500}>
          <div className={classes.leftSection}>
            <div className={classes.designGraphicsTitle}>
              <Zoom delay={2000} duration={2000}>
                <img src={designTitle} alt="Design Graphics" />
              </Zoom>
            </div>
            <div className={classes.leftIlustration}>
              <Flip left duration={2000} delay={2500}>
                <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658671902/catalog/Illustration-IMG_up7trc.webp" alt="ilustration" />
              </Flip>
            </div>
          </div>
        </Fade>
        <div className={classes.rightSection}>
          <div className={classes.ilustrationWrapper}>
            <Fade top duration={2000} delay={500}>
              <img src={ilustrationDesignGraphics} alt="ilustration" />
            </Fade>
          </div>
          <div className={classes.bottomSection}>
            <Fade bottom duration={2000} delay={1000}>
              <div className={classes.designDesc}>
                <Zoom delay={2000} duration={2000}>
                  <p>
                    Kreatif tanpa perencanaan disebut -'seni'.<br/>
                    Kreatif dengan strategi disebut 'periklanan'.<br/>
                    Percayakan kepada kami IKATIK UPNVJ
                  </p>
                </Zoom>
              </div>
            </Fade>
            {(width !== 'sm' || !isMobile) && <div className={classes.iconWrapper}>
              <Roll top duration={2000} delay={1500}>
                <img src={ilustrationIcon} alt="ilustration" />
              </Roll>
            </div>}
          </div>
        </div>
      </div>
    );
  };

  const generateDesignGraphicsGallery = () => {
    return (
      <div className={classes.galleryDesignContainer}>
        <div className={classes.imageWrapper}>
          <Fade left duration={2500} delay={1000}>
            <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658763567/catalog/Group_12523_ls7ccx.webp" alt="Gallery" />
          </Fade>
        </div>
      </div>
    );
  };

  const generateDigitalMarketingSection = () => {
    return (
      <div className={classes.digitalMarketingContainer}>
        <div className={classes.imageWrapper}>
          <Zoom duration={2000} delay={500}>
            <img src={(isMobile || width === 'sm') ?
              "https://res.cloudinary.com/dwvzfit8v/image/upload/v1658653789/catalog/section_6_mobile_nlr7eb.webp"
              :
              "https://res.cloudinary.com/dwvzfit8v/image/upload/v1658653352/catalog/section_6_ytffxr.webp"} alt="Digital Marketing" />
          </Zoom>
        </div>
      </div>
    )
  };

  const generatePartnershipSection = () => {
    return (
      <div className={classes.partnershipContainer}>
        <div className={classes.imageWrapper}>
          <Zoom duration={2000} delay={500}>
            <img src={
              (isMobile || width === 'sm') ?
                "https://res.cloudinary.com/dwvzfit8v/image/upload/v1658764593/catalog/section_7_4_blnavp.webp"
                :
                "https://res.cloudinary.com/dwvzfit8v/image/upload/v1658764355/catalog/section_7_3_qz5pcz.webp"
              }
              alt="Product Partnership" />
          </Zoom>
        </div>
      </div>
    )
  }

  const generateTestimonyForm = () => {
    return (
      <Zoom duration={2000} delay={500}>
        <div className={classes.testimonyFormSection}>
          <Zoom duration={2000} delay={1000}>
            <div className={classes.testimonyTitle}>
              <p>Testimoni Pelanggan</p>
            </div>
          </Zoom>
          <div className={classes.formContainer}>
              <form className={classes.formWrapper} onSubmit={handleSubmit}>
                <Fade duration={2000} delay={1000}>
                  <input type='text' value={name} placeholder='Nama' required onChange={(e) => setName(e.target.value)} />
                </Fade>
                <Fade duration={2000} delay={1300}>
                  <input type='text' value={info} placeholder='Alamat / No. Telepon' required onChange={(e) => setInfo(e.target.value)} />
                </Fade>
                <Fade duration={2000} delay={1600}>
                  <input type='text' value={institution} placeholder='Instansi' required onChange={(e) => setInstitution(e.target.value)} />
                </Fade>
                <Fade duration={2000} delay={1900}>
                  <div className={classes.bottomForm}>
                    <textarea type='text' placeholder='Pesan' value={message} required onChange={(e) => setMessage(e.target.value)} />
                    <button className={classes.btnSubmit} type='submit'>Kirim</button>
                  </div>
                </Fade>
              </form>
              <div className={classes.formIlustration}>
                <div className={classes.ilustrationWrapper}>
                  <Fade bottom duration={2000} delay={1000}>
                    <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658771851/catalog/Group_12497_oqmaou.webp" alt="ilustration" />
                  </Fade>
                </div>
              </div>
          </div>
        </div>
      </Zoom>
    )
  }

  const generateTestimony = () => {
    return (
      <Fade bottom duration={2000} delay={500}>
        <div className={classes.testimonyContainer}>
          <div className={classes.testimonyWrapper}>
            <div className={classes.background}>
              <Fade top duration={2000} delay={1000}>
                <p className={classes.title}>Testimoni</p>
              </Fade>
              <div className={classes.testimonyListWrapper}>
                <div className={classes.testimonyList}>
                  {responseTestimony && responseTestimony.map((testimony, idx) => {
                    return (
                      <Fade bottom duration={2000} delay={idx <= 3 ? idx*600 : 800}>
                        <div className={classes.messageItemWrapper} key={idx}>
                          <div className={classes.avatar}>
                            <img src="https://res.cloudinary.com/dwvzfit8v/image/upload/v1658640208/catalog/profile_lxv7hb.webp" alt='avatar' />
                          </div>
                          <div className={classes.messageShape}>
                            <div className={classes.outerTriangle}>
                              <div className={classes.innerTriangle} />
                            </div>
                            <div className={classes.messageBubble}>
                              <div className={classes.name}>
                                {testimony.name} || {testimony.institution}
                              </div>
                              <div className={classes.message}>
                                {testimony.message}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fade>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  };

  const generateFooter = () => {
    return (
      <div className={classes.footerContainer}>
        <div className={classes.leftSection}>
          <Fade top duration={2000} delay={500}>
            <img className={classes.medsosIlustration} alt="medsos" src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658592452/catalog/medsos_fgvkdv.webp' />
          </Fade>
          <div className={classes.contactUsWrpper}>
            <div className={classes.contactUs}>
              <Fade top delay={500} duration={2000}>
                <img className={classes.title} src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658592982/catalog/contactus_zmfuru.webp' alt="contact us" />
              </Fade>
              <div className={classes.contactUsDesc}>
                <Flip top duration={2000} delay={800}>
                  <p className={classes.subtitle}>ikatik@upnvj.ac.id</p>
                  <p className={classes.subtitle}>0815 - 9001 - 890 (Darma Patri)</p>
                  <p className={classes.subtitle}>0877 - 8927 - 1012 ( Dhapot )</p>
                  <p className={classes.subtitle} onClick={ikatik}>https://www.ikatik.com/</p>
                  <p className={classes.subtitle}>Ikatan Alumni Informatika Dan Komputer</p>
                </Flip>
              </div>
            </div>
            <div className={classes.iconClick}>
              <Flip left duration={2000} delay={500}>
                <img alt="whatsapp" className={classes.icon} onClick={wa}
                  src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658593649/catalog/WA_w4qlon.webp' />
              </Flip>
              <Flip left duration={2000} delay={800}>
                <img alt="ikatik" className={classes.icon} onClick={ikatik}
                  src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658593710/catalog/LOGO_mgxkgm.webp' />
              </Flip>
              <Flip left duration={2000} delay={1100}>
                <img alt="instagram" className={classes.icon} onClick={ig}
                  src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658638144/catalog/Instagram_pxik2i.webp' />
              </Flip>
              <Flip left duration={2000} delay={1400}>
                <a className={classes.icons}
                  href="mailto:ikatik@upnvj.ac.id"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="email" className={classes.icon}
                  src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658593710/catalog/Mail_js5w6q.webp' />
                </a>
              </Flip>
            </div>
          </div>
          <div className={classes.colaboration}>
            <Fade bottom delay={500} duration={2000}>
              <p className={classes.title}><em>In Colaboration</em></p>
              <img alt="Techartsy Indonesia" className={classes.techartsy} onClick={techartsy}
              src='https://res.cloudinary.com/dwvzfit8v/image/upload/v1658417366/Asset%20Techartsy%20Indonesia/Logo/Techartsy_Gold_af8szn.png' />
            </Fade>
          </div>
        </div>
        <div className={classes.rightSection}>
          <div className={classes.maps}>
            <Fade right delay={500} duration={2000}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5167166490132!2d106.8113054!3d-6.3270202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef3c9bb019b1%3A0xbe14abc25d2e3d55!2sStudio%20J76!5e0!3m2!1sid!2sid!4v1658594424051!5m2!1sid!2sid" 
                width={width === 'lg' ? "540" : '200'}
                height={width === 'lg' ? "500" : '200'}
                style={{ border: "1px solid black" }}
                allowFullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </Fade>
          </div>
        </div>
      </div>
    );
  };

  const generateCatalog = () => {
    return (
      <div className={classes.catalogContainer}>
        {
          errorAlert &&
          <Alert
            severity="error"
            style={{
              position: 'fixed',
              zIndex: 5,
              marginTop: (isMobile || width === 'sm') ? '7%' : '2%',
              left: (isMobile || width === 'sm') ? 10 : '35%',
              right: (isMobile || width === 'sm') && 10,
              width: (isMobile || width === 'sm') ? '85%' : '30%'}}>
            Terjadi kesalahan pada sistem, silakan coba lagi.
          </Alert>
        }
        {
          successAlert &&
          <Alert
            severity="success"
            style={{
              position: 'fixed',
              zIndex: 5,
              marginTop: (isMobile || width === 'sm') ? '7%' : '2%',
              left: (isMobile || width === 'sm') ? 10 : '35%',
              right: (isMobile || width === 'sm') && 10,
              width: (isMobile || width === 'sm') ? '85%' : '30%'}}>
            Testimoni Anda berhasil terkirim
          </Alert>
        }
        {generateSlideShow()}
        {generateComproSection()}
        {generateComproSlideShow()}
        {generateMobileAppsDev()}
        {(isMobile || width === 'sm') ? generateMobileServiceSection() : generateServiceSection()}
        {generateDesignGraphics()}
        {generateDesignGraphicsGallery()}
        {generateDigitalMarketingSection()}
        {generatePartnershipSection()}
        {generateTestimonyForm()}
        {generateTestimony()}
        {generateFooter()}
        <Popup show={popupShow} handleClose={openInvitation}/>
        <AudioComponent isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {generateCatalog()}
    </div>
  );
};

export default CatalogPage;