import './index.css';
import Employee from './components/employee';
import { useState, useEffect } from 'react';  // Ensure useEffect is imported
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [employees, setEmployees] = useState([
    {
      firstName: 'Cole',
      lastName: 'Palmer',
      img: 'https://b.fssta.com/uploads/application/soccer/headshots/78918.png',
      rating: null,
      postion: null
    },
    {
      firstName: 'Moisés',
      lastName: 'Caicedo',
      img: 'https://game-assets.fut.gg/2025/player-item/25-256079.4b81fa8fc3c39ce9dcc7555f01dabda8827c89db800084a648532c55e4236719.webp?quality=100&width=500',
      rating: null,
      postion: null
    },
    {
      firstName: 'Nicolas',
      lastName: 'Jackson',
      img: 'https://www.zerozero.pt/img/jogadores/new/78/26/827826_nicolas_jackson_20240817020748.png',
      rating: null,
      postion: null
    },
    {
      firstName: 'Christopher',
      lastName: 'Nkunku',
      img: 'https://www.fifarosters.com/assets/players/fifa24/faces/232411.png',
      rating: null,
      postion: null
    },
    {
      firstName: 'Enzo',
      lastName: 'Fernández',
      img: 'https://static.wikia.nocookie.net/the-football-database/images/d/d5/Enzo_Fern%C3%A1ndez.png',
      rating: null,
      postion: null
    },
    {
      firstName: 'Reece',
      lastName: 'James',
      img: 'https://www.fifarosters.com/assets/players/fifa24/faces/238074.png',
      rating: null,
      postion: null
    },
    {
      firstName: 'Malo',
      lastName: 'Gusto',
      img: 'https://cdn.fifacm.com/content/media/imgs/fc24/players/p259307.png?v=22',
      rating: null,
      postion: null
    },
    {
      firstName: 'Levi',
      lastName: 'Colwill',
      img: 'https://www.zerozero.pt/img/jogadores/new/82/41/748241_levi_colwill__20240817014842.png',
      rating: null,
      postion: null
    },
    {
      firstName: 'Marc',
      lastName: 'Cucurella',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjckXvE021x_OKt7MUDu5QaP2zeaZiy9K0Qw&s',
      rating: null,
      postion: null
    }
  ]);

  // Fetch player rating and position based on first and last name
  const fetchPlayerInfo = async (firstName, lastName) => {
    try {
      const res = await fetch(`http://localhost:5001/api/player/${firstName} ${lastName}`);
      if (!res.ok) {
        throw new Error(`Info not found for ${firstName} ${lastName}`);
      }
      const data = await res.json();
      console.log(`Fetched info for ${firstName} ${lastName}: `, data); // Debug line
      return { rating: data.overall_rating, position: data.position }; // Return both rating and position
    } catch (error) {
      console.error(`Error fetching info for ${firstName} ${lastName}:`, error);
      return { rating: null, position: null }; // Return null for both
    }
  };

  // Fetch ratings for all employees
  useEffect(() => {
    const fetchAllInfo = async () => {
      const updatedEmployees = await Promise.all(employees.map(async (employee) => {
        const { rating, position } = await fetchPlayerInfo(employee.firstName, employee.lastName);
        return { ...employee, rating, position }; // Update each employee with their rating and position
      }));
      console.log('Updated employees with info: ', updatedEmployees); // Debug line
      setEmployees(updatedEmployees);
    };
  
    fetchAllInfo();
  }, []);

  return (
    <div className="App">
      <h1 className='font-extrabold text-fuchsia-500 font-serif italic text-7xl text-center rounded-lg backdrop-blur-md'>
        ROSTER
      </h1>
      
      <div className='flex flex-wrap justify-center'>
        {employees.map((employee) => (
          <Employee 
            key={uuidv4()}
            firstName={employee.firstName}
            lastName={employee.lastName}
            position={employee.position}
            rating={employee.rating}
            img={employee.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
