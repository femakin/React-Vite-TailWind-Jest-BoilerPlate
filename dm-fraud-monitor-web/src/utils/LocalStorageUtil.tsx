
// import CryptoJS from 'crypto-js'

// const setLocalStorage = async (key : string, value : any) => {
//     var ciphertext = CryptoJS.AES.encrypt(value, import.meta.env.VITE_LOCAL_STORAGE_KEY).toString();
//     localStorage.setItem(key, ciphertext)
// };

// const getLocalStorage = async (key : string)  => {
//     const ciphertext = localStorage.getItem(key);
//     if (ciphertext) {
//         var bytes = CryptoJS.AES.decrypt(ciphertext, import.meta.env.VITE_LOCAL_STORAGE_KEY)
//         var originalText = bytes.toString(CryptoJS.enc.Utf8);

//         return JSON.parse(originalText)
//     }
//     else {
//         return null
//     }
// };

// const clearLocalStorage = async () => {
//     localStorage.clear()
// };

// const MyComponent = () => {
//     return (
//         <></>
//     );
// };

// export { setLocalStorage, getLocalStorage, clearLocalStorage };
// export default MyComponent;


import CryptoJS from 'crypto-js';

 const ENCRYPTION_KEY = import.meta.env.VITE_LOCAL_STORAGE_KEY as string;



// const ENCRYPTION_KEY = import.meta?.env?.VITE_LOCAL_STORAGE_KEY || "default-test-key##XX^!I(";


const LocalStorageUtil = {
 /*    set(key: string, value: any): void { */
  set<T>(key: string, value: T): void {
        try {
            const stringValue = JSON.stringify(value); // Ensure value is a string
            const ciphertext = CryptoJS.AES.encrypt(stringValue, ENCRYPTION_KEY).toString();
            localStorage.setItem(key, ciphertext);
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    },

    get<T>(key: string): T | null {
        try {
            const ciphertext = localStorage.getItem(key);
            if (!ciphertext) return null;

            const bytes = CryptoJS.AES.decrypt(ciphertext, ENCRYPTION_KEY);
            const originalText = bytes.toString(CryptoJS.enc.Utf8);
            return JSON.parse(originalText) as T; // Type-safe return
        } catch (error) {
            console.error(`Error getting localStorage key "${key}":`, error);
            return null;
        }
    },

    clear(): void {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    },
};


function getLocalStorage<T>(key: string): T | null {
  const item = LocalStorageUtil.get(key);
  return item  as T;
}


// const getLocalStorage = async (key : string)  => {
//     return LocalStorageUtil.get(key);
// }




// const setLocalStorage = async (key : string, value : any) => {
//     LocalStorageUtil.set(key, value);
// }


function setLocalStorage<T>(key: string, value: T): T | null {
  const item = LocalStorageUtil.set(key, value);
  return item  as T;
}



const clearLocalStorage = async () => {
    LocalStorageUtil.clear();
}


const MyComponent: React.FC = () => {
    return <></>;
};

export { getLocalStorage, setLocalStorage, clearLocalStorage };
export default MyComponent;
