import React from "react";
import { Link } from "react-router-dom";

import { Menu, Image, Button } from "antd";

import "antd/dist/antd.css";

import {
  UserOutlined,
  ShoppingCartOutlined,
  FacebookFilled,
  MailFilled,
} from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm } from "../features/counter/formSlice";
import { currentCart, resetCart } from "../features/counter/cartSlice";

import { setActiveUser, setUserLogOut } from "../features/counter/userSlice";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../features/auth/userAuth";

export const LoginMenu = () => {
  const dispatch = useAppDispatch();

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result: any) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("token", token);
        const loginUser = {
          userName: result.user.displayName,
          email: result.user.email,
          token: token,
        };

        localStorage.setItem("user", JSON.stringify(loginUser));
        const getUser: any = localStorage.getItem("user");

        dispatch(
          setActiveUser({
            userName: loginUser.userName,
            email: loginUser.email,
          })
        );

        // ...
      })
      .catch((err) => alert(err.message));
  };
  const loginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result: any) => {
        const credential: any =
          FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("token", token);
        const loginUser = {
          userName: result.user.displayName,
          email: result.user.email,
          token: token,
        };

        localStorage.setItem("user", JSON.stringify(loginUser));
        const getUser: any = localStorage.getItem("user");

        dispatch(
          setActiveUser({
            userName: loginUser.userName,
            email: loginUser.email,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Menu
      style={{ width: 230, height: "auto", marginTop: 15, borderRadius: 5 }}
    >
      <React.Fragment>
        <Menu.Item
          key="1"
          icon={<UserOutlined />}
          style={{ margin: 15, borderRadius: 5, backgroundColor: "#fa8c16" }}
          onClick={() => dispatch(showForm(true))}
        >
          Login
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<UserOutlined />}
          style={{ margin: 15, borderRadius: 5, backgroundColor: "#fa8c16" }}
          onClick={() => dispatch(showForm(true))}
        >
          Register
        </Menu.Item>

        <Menu.Item
          key="3"
          icon={<FacebookFilled />}
          style={{
            margin: 15,
            borderRadius: 5,
            backgroundColor: "#096dd9",
            color: "white",
          }}
          onClick={loginWithFacebook}
        >
          Login with Facebook
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<MailFilled />}
          style={{
            margin: 15,
            borderRadius: 5,
            backgroundColor: "#f5222d",
            color: "white",
          }}
          onClick={loginWithGoogle}
        >
          Login with Google
        </Menu.Item>
      </React.Fragment>
    </Menu>
  );
};
export const UserMenu = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOut());
        dispatch(resetCart());
      })
      .catch((error: any) => alert(error.message));
  };
  return (
    <Menu style={{ width: 230, height: "auto", borderRadius: 5 }}>
      <Menu.Item key="1" onClick={() => console.log("User profile")}>
        My profile
      </Menu.Item>
      <Menu.Item key="2" onClick={() => console.log("Purchase history")}>
        Purchase history
      </Menu.Item>
      <Link to="./">
        <Menu.Item key="3" onClick={handleSignOut}>
          Log out
        </Menu.Item>
      </Link>
    </Menu>
  );
};
export const ItemsInCart = () => {
  const products = useAppSelector(currentCart);
  return (
    <>
      {products.length ? (
        <Menu
          style={{
            width: 400,
            padding: 10,
            borderRadius: 5,
            border: "1px solid gray",
          }}
        >
          {products.map((product) => {
            return (
              <>
                <Menu.Item key={product.id}>
                  <Image
                    width={30}
                    src={`/${product.img[0]}`}
                    alt={product.name}
                  />
                  <span>{product.description}</span>
                  <span style={{ color: "red" }}>{product.price}</span>
                </Menu.Item>
              </>
            );
          })}
          <Button type="primary" danger style={{ marginLeft: 290 }}>
            View Cart
          </Button>
        </Menu>
      ) : (
        <Menu style={{ width: 400, height: 250 }}>
          <Link to="/cart">
            <React.Fragment>
              <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
                Current Cart
              </Menu.Item>
              <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                No item in cart
              </Menu.Item>
            </React.Fragment>
          </Link>
        </Menu>
      )}
    </>
  );
};
