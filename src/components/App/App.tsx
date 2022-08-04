import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { login } from '../../store/slices/userSlice';
import { RootState } from '../../store/store';
import { AccountComponent } from '../AccountComponent/AccountComponent';
import { AuthComponent } from '../AuthComponent/AuthComponent';
import s from './App.module.scss';

function App() {
  const isAuth = useSelector((state: RootState) => state.userSlice.isLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('isLogin')) dispatch(login()); 
  });
  return (
    <main className={s.App}>
      <Routes>
        {
          isAuth ? (
            <>
              <Route path='/*' element={<Navigate to='/account'/>}/>
              <Route path='/account' element={<AccountComponent />}/>
            </>
          ) : (
            <>
              <Route path='/*' element={<Navigate to='/auth'/>}/>
              <Route path='/auth' element={<AuthComponent />}/>
            </>
          )
        }
        
      </Routes>
    </main>
  );
}

export default App;
