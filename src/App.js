import './App.css';
import { createContext, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from './Pages/Home';
import Property from './Pages/Property';
import DashboardModule from './module/DashboardModule';
import MapEss from './Pages/MapEss';
import BecomeHost from './Pages/BecomeHost';
import Mainpage from './Components/MapPage/MapBox/mainpage'
import SignUpForm from './Pages/SignUpForm';
import CreetAccount from './Pages/CreetAccount';
import Hosting from './Pages/Hosting';
import Discover from './Pages/Discover';



export const ThemeContext = createContext();


const mainTheme = createTheme({
  palette: {
    // essam choice of color set is presented here:
    primary: {
      main: '#0c2442',
      light: '#4f7492'
    },
    secondary: {
      main: '#4f5a71'
    },
    purple: {
      main: '#17152e'
    },
    newColor: {
      main: "#fffff"
    },
    ofwhite: '#ffffff',
    light: '#f7f7f7',
    grey1: '#efefef',
    red: "#FF0000",
  },

  // Typography should be edit according to layout
  typography: {
    fontFamily: 'Montserrat',
    fontWeightRegular: 200,
    fontWeightMedium: 400,
    fontWeightBold: 800,
    fontSize: 12,
    lineHeight: '50',
    h1: {
      fontSize: 30,
    },
    h5: {
      fontWeight: 900,
      fontSize: 22
    },
    p: {
      fontFamily: 'Lato',
    },
    h2: {

    },
    essamText: {
      fontFamily: 'syne'
    },
    subtitle1: {
      fontFamily: 'lato',
      fontWeight: 500,
      fontSize: 14
    },
    subtitle2: {
      fontFamily: 'lato',
      fontWeight: 700,
      fontSize: 13
    },
    subtitle3: {
      fontFamily: 'lato',
      fontWeight: 700,
      fontSize: 17
    },
    subtitle4: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 16,
    },
    subtitle5: {
      fontFamily: 'lato',
      fontWeight: 500,
      fontSize: 12
    },
    OVERLINE: {
      fontFamily: 'Montserrat',
      fontWeight: 900,
      fontSize: 13
    },
    headerItem: {
      fontFamily: 'lato',
      fontWeight: 600,
      marginLeft: 30,
      marginRight: 30,
      fontSize: 12
    },
    clickable: {
      fontFamily: 'Montserrat',
      fontWeight: 900,
      fontSize: 11,
      marginTop: 10,
      '&:hover': {
        cursor: 'pointer'
      },
    }


    // body1 body subtitle1 subtitle2 caption button overline
  }

})
function App() {
  return (

    <Suspense fallback={<h1>LOOOOOOOOOOAAADINGGGG</h1>}>
      <ThemeProvider theme={mainTheme}>
        <ThemeContext.Provider value={{ mainTheme }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="dashboard/*" element={<DashboardModule />} /> 
              <Route path="property" element={<Property />} />
              <Route path="/mapess" element={<MapEss />} />
              <Route path="hosting" element={<BecomeHost />} /> 
              <Route path="hosting" element={<BecomeHost />} /> 
              <Route path="mapbox" element={<Mainpage />}/>
              <Route path="hosting" element={<Hosting />} /> 
              {/* <Route path="hosting" element={<BecomeHost />} />  */}
              {/* <Route path="mapbox" element={<MapBox />}/> */}
              <Route path="/discover" element={<Discover />}/>
              <Route path="/creat-account" element={<CreetAccount />}/>
              <Route path="/sign-up" element={<SignUpForm />}/>
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </ThemeProvider>
    </Suspense>
  )
}

export default App;