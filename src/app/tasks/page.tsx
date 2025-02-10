import axios from "axios";

const page = async () => {
    const response = await axios.get('http://localhost:3000/api/tasks')
    
    const tasks = await response.data;

    console.log("hey from client component")
  return (
    <div className="text-2xl"></div>
  )
}

export default page