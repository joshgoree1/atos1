// < !DOCTYPE html >
//     <html>
//         <body>
//             <h2>Using JavaScript to redirect a webpage after 5 seconds</h2>
//             <p id="result"></p>
//             <button onclick="redirect()">Click to Redirect to Tutorials Point</button>
//             <script>
//                 function redirect () {
//          var interval = setInterval(myURL, 5000);
//                 var result = document.getElementById("result");
//                 result.innerHTML = "<b> The page will redirect after delay of 5 seconds setInterval() method.";
//       }

//                     function myURL() {
//                         document.location.href = 'https://www.tutorialspoint.com/index.htm';
//                     clearInterval(interval);
//       }
//             </script>
//         </body>
//     </html>

              
 function redirect () {
             var interval = setInterval(myURL, 4000);
                var result = document.getElementById("result");
                result.innerHTML = "<b>";
         }

                    function myURL() {
                        document.location.href = 'https://my.gov.au/';
                    clearInterval(interval);
      }