import React from 'react';
import { Box } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';
import Quiz from './components/Quiz';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
    return (
        
            <Box>
                <Routes>
                    <Route path={"/"} element={<Quiz />} />
                    <Route path={"/editor"} element={<CodeEditor />} />
                </Routes>
            </Box>
           
        
    );
}

export default App;


// import { Box } from '@chakra-ui/react'
// import React from 'react'
// import CodeEditor from './components/CodeEditor'
// import Quiz from './components/Quiz'
// import { Route, Routes } from 'react-router-dom'

// const App = () => {
//   return (
//     // <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
//     //     <CodeEditor/>
       
//     // </Box>
//   <Box>
//      <Quiz/>
//     <Routes>
//       <Route path={"/editor"} element={<CodeEditor/>}></Route>
//     </Routes>
   
//   </Box>
//   )
// }

// export default App