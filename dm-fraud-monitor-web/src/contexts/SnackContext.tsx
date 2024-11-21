// import { useContext, createContext } from "react";
// import { notification } from 'antd';

// const SnackContext = createContext();

// const SnackProvider = ({ children }) => {
//     const [api, contextHolder] = notification.useNotification();

//     const openNotification = (msg, desc, position) => {
//         api.info({
//             message: msg,
//             description: desc,
//             placement: position,
//         });
//     };

//     const errorNotification = (msg, desc, position) => {
//         api.error({
//             message: msg,
//             description: desc,
//             placement: position,
//         });
//     };

//     const successNotification = (msg, desc, position) => {
//         api.success({
//             message: msg,
//             description: desc,
//             placement: position,
//         });
//     };

//     return (
//         <SnackContext.Provider
//             value={{ successNotification, openNotification, errorNotification }}
//         >
//             {contextHolder}
//             {children}
//         </SnackContext.Provider>
//     )
// }
// export default SnackProvider;

// export const useSnackContext = () => useContext(SnackContext)




import { useContext, createContext, ReactNode } from "react";
import { notification } from "antd";

// Define the type for the placement property
type NotificationPlacement = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

// Define the type for the notification functions
type NotificationFunction = (
  msg: string,
  desc: string,
  position: NotificationPlacement
) => void;

// Define the type for the context value
interface SnackContextType {
  successNotification: NotificationFunction;
  openNotification: NotificationFunction;
  errorNotification: NotificationFunction;
}

// Create the context with the appropriate type, initializing as undefined
const SnackContext = createContext<SnackContextType | undefined>(undefined);

interface SnackProviderProps {
  children: ReactNode;
}

export const SnackProvider: React.FC<SnackProviderProps> = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification: NotificationFunction = (msg, desc, position) => {
    api.info({
      message: msg,
      description: desc,
      placement: position,
    });
  };

  const errorNotification: NotificationFunction = (msg, desc, position) => {
    api.error({
      message: msg,
      description: desc,
      placement: position,
    });
  };

  const successNotification: NotificationFunction = (msg, desc, position) => {
    api.success({
      message: msg,
      description: desc,
      placement: position,
    });
  };

  return (
    <SnackContext.Provider
      value={{ successNotification, openNotification, errorNotification }}
    >
      {contextHolder}
      {children}
    </SnackContext.Provider>
  );
};

// Hook to use the snack context
export const useSnackContext = (): SnackContextType => {
  const context = useContext(SnackContext);
  if (!context) {
    throw new Error("useSnackContext must be used within a SnackProvider");
  }
  return context;
};
