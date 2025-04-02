import {useSelector} from 'react-redux';

export default function ThemeProvider({children}) {
    const {theme} = useSelector ((state) => state.theme);
    
  return (
    <div className = {`${theme} min-h-screen transition-all duration-300`} >
            <div className="bg-inherit text-inherit">
            {children}
            </div>
    </div>
  );
}
