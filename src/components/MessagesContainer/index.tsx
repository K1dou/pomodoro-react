import React from "react";
import { Bounce, ToastContainer } from "react-toastify";

export function MessagesContainer({ children }: { children: React.ReactNode }) {

    return <>

        {children}

        <ToastContainer
            position="top-center"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    </>

}