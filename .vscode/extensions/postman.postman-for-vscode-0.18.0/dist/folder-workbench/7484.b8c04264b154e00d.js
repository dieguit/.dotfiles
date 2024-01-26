(self.webpackChunkfolder_workbench=self.webpackChunkfolder_workbench||[]).push([[7484],{47484:(e,t,s)=>{var a=s(49772),n=["prerequest","test"];e.exports={getExamples:function(e){if(!e||!n.includes(e))throw new Error("Invalid event type");return a.reduce((function(t,s){return s.validity&&s.validity.includes(e)&&t.push(function(e){return{name:e.name,description:e.description,code:e.code}}(s)),t}),[])}}},49772:e=>{"use strict";e.exports=JSON.parse('[{"id":"get-env-var","name":"Get an environment variable","description":"Gets an environment variable","code":"pm.environment.get(\\"variable_key\\");","validity":["prerequest","test"]},{"id":"get-global-var","name":"Get a global variable","description":"Gets a global variable","code":"pm.globals.get(\\"variable_key\\");","validity":["prerequest","test"]},{"id":"get-var","name":"Get a variable","description":"Gets a variable (environment or global)","code":"pm.variables.get(\\"variable_key\\");","validity":["prerequest","test"]},{"id":"get-collection-var","name":"Get a collection variable","description":"Gets a collection variable","code":"pm.collectionVariables.get(\\"variable_key\\");","validity":["prerequest","test"]},{"id":"set-env-var","name":"Set an environment variable","description":"Sets an environment variable","code":"pm.environment.set(\\"variable_key\\", \\"variable_value\\");","validity":["prerequest","test"]},{"id":"set-global-var","name":"Set a global variable","description":"Sets a global variable","code":"pm.globals.set(\\"variable_key\\", \\"variable_value\\");","validity":["prerequest","test"]},{"id":"set-collection-var","name":"Set a collection variable","description":"Sets a collection variable","code":"pm.collectionVariables.set(\\"variable_key\\", \\"variable_value\\");","validity":["prerequest","test"]},{"id":"clear-env-var","name":"Clear an environment variable","description":"Clears an environment variable if set","code":"pm.environment.unset(\\"variable_key\\");","validity":["prerequest","test"]},{"id":"clear-global-var","name":"Clear a global variable","description":"Clears a global variable if set","code":"pm.globals.unset(\\"variable_key\\");","validity":["prerequest","test"]},{"id":"clear-collection-var","name":"Clear a collection variable","description":"Clears a collection variable if set","code":"pm.collectionVariables.unset(\\"variable_key\\");","validity":["prerequest","test"]},{"id":"send-request","name":"Send a request","description":"Sends a request","code":"pm.sendRequest(\\"https://postman-echo.com/get\\", function (err, response) {\\n    console.log(response.json());\\n});","validity":["prerequest","test"]},{"id":"test-response-status-code","name":"Status code: Code is 200","description":"Write a basic status code check","code":"pm.test(\\"Status code is 200\\", function () {\\n    pm.response.to.have.status(200);\\n});","validity":["test"]},{"id":"test-response-body-sub-string","name":"Response body: Contains string","description":"Write a basic string check in response body","code":"pm.test(\\"Body matches string\\", function () {\\n    pm.expect(pm.response.text()).to.include(\\"string_you_want_to_search\\");\\n});","validity":["test"]},{"id":"test-response-body-json","name":"Response body: JSON value check","description":"Write a basic json value check","code":"pm.test(\\"Your test name\\", function () {\\n    var jsonData = pm.response.json();\\n    pm.expect(jsonData.value).to.eql(100);\\n});","validity":["test"]},{"id":"test-response-body-string","name":"Response body: Is equal to a string","description":"Write a response body string check","code":"pm.test(\\"Body is correct\\", function () {\\n    pm.response.to.have.body(\\"response_body_string\\");\\n});","validity":["test"]},{"id":"test-response-headers","name":"Response headers: Content-Type header check","description":"Write a basic response header check","code":"pm.test(\\"Content-Type is present\\", function () {\\n    pm.response.to.have.header(\\"Content-Type\\");\\n});","validity":["test"]},{"id":"test-response-time","name":"Response time is less than 200ms","description":"Write a basic response time check","code":"pm.test(\\"Response time is less than 200ms\\", function () {\\n    pm.expect(pm.response.responseTime).to.be.below(200);\\n});","validity":["test"]},{"id":"test-response-status-code-post","name":"Status code: Successful POST request","description":"Check for successful POST request","code":"pm.test(\\"Successful POST request\\", function () {\\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\\n});","validity":["test"]},{"id":"test-response-status-name","name":"Status code: Code name has string","description":"Write a basic response code string check","code":"pm.test(\\"Status code name has string\\", function () {\\n    pm.response.to.have.status(\\"Created\\");\\n});","validity":["test"]},{"id":"convert-response-xml-json","name":"Response body: Convert XML body to a JSON Object","description":"Convert response body from JSON to XML","code":"var jsonObject = xml2Json(responseBody);","validity":["test"]},{"id":"tv4-validate-json","name":"Use Tiny Validator for JSON data","description":"Validate response against a schema with Tiny Validator","code":"var schema = {\\n  \\"items\\": {\\n    \\"type\\": \\"boolean\\"\\n  }\\n};\\n\\nvar data1 = [true, false];\\nvar data2 = [true, 123];\\n\\npm.test(\'Schema is valid\', function() {\\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\\n});","validity":["test"]}]')}}]);
//# sourceMappingURL=7484.b8c04264b154e00d.js.map