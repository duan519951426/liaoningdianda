/* 网站首页加载模块 */

// css
import cssCommon from '../../css/modules/common.css';
import cssHeader from '../../css/modules/header.css';
import cssBanner from '../../css/modules/banner.css';
import cssNav from '../../css/modules/nav.css';
import cssTitle from '../../css/modules/title.css';
import mIndex from '../../css/m.index.css';
import icons from '../../css/modules/indexicons.css';
import cssFooter from '../../css/modules/footer.css';

// js
import banner from '../banner.js';
import bannerNews from '../banner-news.js';
// import video from '../video.js';
import friendsHref from '../friendsHref.js';
import formOpen from '../formOpen.js';

// 执行
banner();
bannerNews();
// video();
friendsHref();
formOpen();