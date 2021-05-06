import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import useStyle from "./style";
import { login } from "../../reducers/actions/User";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signinUserSchema } from "../../reducers/services";
import LoadingPage from '../../components/LoadingPage';
function Login() {
  const classes = useStyle()
  const { loading, error } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  // lấy user từ local lên: khi xóa user dưới local sẽ phải đăng nhập lại
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  useEffect(() => {
    document.title = 'Đăng nhập'
  }, [])

  if (loading) {
    return <LoadingPage />
  }
  if (currentUser) {
    return <Redirect to='/' />
  }


  return (
    <div className={classes.loginWrap}>
      <div className={classes.loginHtml}>
        <div>
          <h3 className={classes.signIn}>Đăng Nhập</h3>
          <div className={classes.loginForm}>
            <div className={classes.signInHtml}>
              <Formik
                initialValues={{ taiKhoan: "", matKhau: "" }}
                validationSchema={signinUserSchema}
                onSubmit={(user) => { dispatch(login(user)) }}
                render={({ handleChange }) => (
                  <Form>
                    <div className={classes.group}>
                      <label htmlFor="user" className={classes.label}>Tài khoản</label>
                      <Field id="user" type="text" className={classes.input} name="taiKhoan" onChange={handleChange} />
                      <ErrorMessage name="taiKhoan">
                        {(taiKhoan) => {
                          return (
                            <div style={{ color: '#ff0000d1' }}>{taiKhoan}</div>
                          )
                        }}
                      </ErrorMessage>
                    </div>
                    <div className={classes.group}>
                      <label htmlFor="pass" className={classes.label}>Mật khẩu</label>
                      <Field id="pass" type="password" className={classes.input} data-type="password" name="matKhau" onChange={handleChange} />
                      <ErrorMessage name="matKhau">
                        {(matKhau) => {
                          return (
                            <div style={{ color: '#ff0000d1' }}>{matKhau}</div>
                          )
                        }}
                      </ErrorMessage>
                    </div>
                    <div className={classes.group}>
                      <input id="check" type="checkbox" checked />
                      <label for="check" class={classes.check}>Tiếp tục đăng nhập</label>
                    </div>
                    <div className={classes.group}>
                      <button type="submit" className={classes.button} disabled={loading}>
                        Đăng nhập
                    </button>
                    </div>
                    <div className={classes.devide} />
                    <div className={classes.footLnk}>
                      <Link to='/dangky' >Chưa có tài khoản? Đăng ký ngay</Link>
                    </div>
                  </Form>
                )}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;