import '../styles/style.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }) {
  return (
      <SimpleReactLightbox>
         <Component {...pageProps} />
      </SimpleReactLightbox>
  );
}

export default MyApp
