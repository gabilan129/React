componente conjunto de elemntos que cumplen una funcion 

diseño modular los componentes permiten separar la interfaz de usuario en piezas independientes , reutilizables y pensar en cada piesa de forma aislada

componentes basados en funciones los componentes de react se crean apartir de funciones

react reconoce como componente a todas las funciones que en la primera letra este con mayuscula const Title = () =>{ retur (<h1></h1>)}

los componentes pueden recivir propiedades (props)
pueden hacer render de un unico elemento pero puede tener elemntos hijos div>div>h1>=p
puede tener estados 

react es uni direccional 

las props se utilizan para psar datos de un componente padre a un componente hijo


si alguna prop es una funcion (se la llama callback) el componente hijo puede llamarla para provocar efectos en el componente padre
props.callback props.label


render de un unico elemento si no necesito el div uso las fragment que son <></>



estados los estados de un componente en react se utilizan para representar la informacion que puede cambiar durante la vida util del componente y afectar su representacion en la interfaz de uzuario

Los Etados son un concepto de react


Hooks los hoock permiten utilizar caracteristicas de react // los hooks son funciones que se pueden usar dentro de los componentes fuionales para agregar funcionalidad a react
son varias sus funcionalidas pero la principal son los estados una de ellas es su useState
todas las funciones cominesan Con use como por ejemplo useState los hoock solo se pueden utilizar en componentes funcionales

useState devuelve un arrar de 2 elementos el primer elemtos es el valor actual del estado el segundo elemntos es una funcion que permite cambiar el valor del estado
const [count,setCount] = useState() 
      

