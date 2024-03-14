// working
// Output.jsx
import { Box, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const Output = ({ editorRef }) => {
    const [output, setOutput] = useState("");
    const runCode = async () => {
      const sourceCode = editorRef.current.getValue();
     
      try {
          const consoleLogs = [];
          const originalConsoleLog = console.log;
          console.log = (...args) => {
              consoleLogs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' '));
              originalConsoleLog(...args);
          };
          
          // Check if there are any asynchronous functions defined in the source code
          if (sourceCode.includes('async function') || sourceCode.includes('async ()')) {
              // If asynchronous functions are detected, evaluate the code inside an async function
              await new Promise(resolve => {
                  (async () => {
                      try {
                          await eval(sourceCode);
                          resolve();
                      } catch (error) {
                          console.error(error);
                          setOutput("Error occurred: " + error.message);
                          resolve();
                      }
                  })();
              });
          } else {
              // Execute the JavaScript code synchronously
              eval(sourceCode);
          }
  
          // Restore original console.log
          console.log = originalConsoleLog;
  
          // Set output to captured console output
          setOutput(consoleLogs.join('\n'));
      } catch (error) {
          // Handle errors
          console.error(error);
          setOutput("Error occurred: " + error.message);
      }
  };
  
    return (
        <Box w="50%">
            <Text mb={2} fontSize="lg">
                Output
            </Text>
            <Button
                variant="outline"
                colorScheme="green"
                mb={4}
                onClick={runCode}
            >
                Run Code
            </Button>
            <Box
                height="75vh"
                p={2}
                border="1px solid"
                borderRadius={4}
                borderColor="#333"
                overflow="auto" // Enable scrolling
            >
                {output}
            </Box>
        </Box>
    );
};

export default Output;





// not for big code
// // Output.jsx
// import { Box, Button, Text } from '@chakra-ui/react';
// import React, { useState } from 'react';

// const Output = ({ editorRef }) => {
//     const [output, setOutput] = useState("");

//     const runCode = async () => {
//         const sourceCode = editorRef.current.getValue();
       
//         try {
//             const consoleLogs = [];
//             const originalConsoleLog = console.log;
//             console.log = (...args) => {
//                 consoleLogs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' '));
//                 originalConsoleLog(...args);
//             };
            
//             // Execute the JavaScript code
//             eval(sourceCode);
            
//             // Restore original console.log
//             console.log = originalConsoleLog;
    
//             // Set output to captured console output
//             setOutput(consoleLogs.join('\n'));
//         } catch (error) {
//             // Handle errors
//             console.error(error);
//             setOutput("Error occurred: " + error.message);
//         }
//     };

//     return (
//         <Box w="50%">
//             <Text mb={2} fontSize="lg">
//                 Output
//             </Text>
//             <Button
//                 variant="outline"
//                 colorScheme="green"
//                 mb={4}
//                 onClick={runCode}
//             >
//                 Run Code
//             </Button>
//             <Box
//                 height="75vh"
//                 p={2}
//                 border="1px solid"
//                 borderRadius={4}
//                 borderColor="#333"
//                 overflow="auto" // Enable scrolling
//             >
//                 {output}
//             </Box>
//         </Box>
//     );
// };

// export default Output;







// **origioanl *

// import { Box,Button, Text } from '@chakra-ui/react';
// import React from 'react'

// const Output = ({ editorRef, language }) => {
//     const runCode=async ()=>{
//         const sourceCode = editorRef.current.getValue();
//         if (!sourceCode) return; 
//     }
//   return (
//     <Box w="50%">
//     <Text mb={2} fontSize="lg">
//       Output
//     </Text>
//     <Button
//       variant="outline"
//       colorScheme="green"
//       mb={4}
//     //   isLoading={isLoading}
//     //   onClick={runCode}
//     >
//       Run Code
//     </Button>
//     <Box
//       height="75vh"
//       p={2}
//     //   color={isError ? "red.400" : ""}
//       border="1px solid"
//       borderRadius={4}
//     //   borderColor={isError ? "red.500" : "#333"}
//       // fontSize={25}
//       borderColor="#333"
//     >
//         test
//       {/* {output
//         ? output.map((line, i) => <Text key={i}>{line}</Text>)
//         : 'Click "Run Code" to see the output here'} */}
        
//     </Box>
//   </Box>
//   )
// }

// export default Output;