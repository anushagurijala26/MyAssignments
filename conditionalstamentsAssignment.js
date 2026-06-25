function launchBrowser(browserName)
{
 if (browserName === "chrome")
 {
    console.log("this is chrome browsser");
    
 }
 else{
    console.log("not a chrome browser");
    
 }

}
launchBrowser('chrome')
function runTests(testType)
{

 switch (testType) {
    case "smoke":
        console.log("this is smoke");
        break;
    case "regression":
        console.log("this is regression");
        break;
    case "sanity":
        console.log("sanity");
        break;
        
    default:
        console.log("this is default smoke");
        break;
 }
}

runTests("sanity")