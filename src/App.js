import './index.css';
import Employee from './components/employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees,setEmployees] = useState([
    {
      name: 'Maresca', 
      role: 'Manager', 
      img: 'https://images.fotmob.com/image_resources/playerimages/34000.png'
    },
    {
      name: 'Palmer', 
      role: 'Forward', 
      img: 'https://b.fssta.com/uploads/application/soccer/headshots/78918.png'
    },
    {
      name: 'Caicedo', 
      role: 'Midfielder', 
      img: 'https://game-assets.fut.gg/2025/player-item/25-256079.4b81fa8fc3c39ce9dcc7555f01dabda8827c89db800084a648532c55e4236719.webp?quality=100&width=500'
    },
    {
      name: 'Jackson', 
      role: 'Striker', 
      img: 'https://www.zerozero.pt/img/jogadores/new/78/26/827826_nicolas_jackson_20240817020748.png'
    },
    {
      name: 'Nkunku', 
      role: 'Forward', 
      img: 'https://www.fifarosters.com/assets/players/fifa24/faces/232411.png'
    },
    {
      name: 'Fernandez', 
      role: 'Midfielder', 
      img: 'https://static.wikia.nocookie.net/the-football-database/images/d/d5/Enzo_Fern%C3%A1ndez.png'
    },
  ]);
  const showEmployees = true;

  return (
    <div className="App"> 

    {showEmployees ? (
      <>
      <input type="text" onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            return (
              <Employee 
                key={uuidv4()}
                name={employee.name} 
                role={employee.role} 
                img={employee.img} 
              />
            );
          })}
        </div>
      </>
    ) : (
      <p>You cannot see the employees</p>
    )}

    </div>
  );
}

export default App;
