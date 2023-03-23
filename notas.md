<!--todo componentes 1 -->

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
      
los estados se actualizan de forma asincrona


<!--! prev => prev + 1 trabaja con el valor previo -->

componentes contonedores estan orientados al funcionamiento de de la aplicacion , contienen componentes de presentacion y otros contenedores , tienen datos para representar los cambios de estado tienen estados para representar los cambios de los datos

componentes de presentacion se encargan de mostrar y dar estilos







<!--todo clase 5  -->

los hooks son funciones que le dan funcionabilidad adicional a nuestros componentes funcionales

hooks basicos
useState : para crear un estado
useEfect: para sincronizar componentes
useContext : para usar un contexto



useRef se utiliza para crear una referencia mutable
por lo que entiendo no ejecuta un nuevo render se utiliza para guarda un valor que no genere un nuevo render


useEfect  
este hook recibe dos argumentos

primero una funcion de callback con acciones a ejecutar

segundo un array de dependencia , le paso el nombre de estados o props que tienen que cambiar para volver a ejecutar ese codigo

useEfect(fn funcion flecha,[])

se usa para consumir una api
<!-- const Mercadolibre = () => {
  const [productos, setProductos] = useState();
  const [input, setInput] = useState();

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProductos(json.results); // json.result tengo que guardarlo en un estado
        console.log(json.results)
      });
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input + ` usted busco`);
  };

  return (
    <div>
      <h1>clase 7 consumiendo apis</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button>search</button>
      </form>
      <h1>Mercadolibre</h1>
      <div className="card-container">
        { productos && productos.map((prod) => {
          return (
        <div className="divCard" key={prod.id}>
          <h3>{prod.title}</h3>
          <img src={prod.thumbnail} alt={prod.title}/>
          <p>{prod.price}</p>
          <button >{prod.title}</button>
        </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mercadolibre; -->

&&



<!--TODO clase 7 intercambio de datos --> 

protocolo de transferencia

definir una direccion url para definir con quien me estoy comunicando

definir el verbo para difinir cual de todas la acciones quiero pedir

parametro via query o url



URL Y VERB

get :quiero obeter      
post :quiero creat
put :quiero crear o actualizar
patch :quiero alterar parcialmente
delete :quiero eliminar

Query Params
para la busqueda


<!-- no es obligatorio  ni ocurre de la misma forma siempre hay que leer la documentacion-->

se puede leer como  

buscar en google.com.ar
utilizando https
recurso search // resultados de busqueda
que contengan la palabra q = query `coderhouse`

url query params

se seprar la url de los parametros 
utilizando un signo de pregunta
cada parametro tendra una key = value& key2=value
cada parametro se separa por &


Recursos/RestFUl


body

se utiliza para trasferir piezas de informacion entre cliente y servidor


headers

se usar para

definir las repuestas soportadas por el navegador
agregar informacion extra
authentificar tokens,cookis
lenguaje preferido
si acepta contenido cacheado
lo que quieras en forma de texto



fetch


<!-- todo clase 8 -->

inicio 

busqueda

detalle

confirmacion fin


itemListConteiner
itemListConteiner+Categorias
detalles
Carrito 
Checkout

para ver tengo que validar los componentes contra un estado 

npm install react-router-dom

browserRouter hace la conexion entre estado y url
en ese componente se envuelven todos los demas
navbar es hijo de browserRouter
tiene que tener un componentes link que se le pasa por props una url
la props para navegar en el componente link es to=/item


routs envuelve a todos los componentes que son dinamicos que van cambiando 
el navbar deberia estar fuera de routes . el nav tiene que ser hijo del estado view que sincroniza la url

route envuelve a cada uno de los componentes lo que hace es que se le pasa por propos la url de cada uno 
