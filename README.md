# Kanban Application based on MERN stack

## *API Endpoints*

### **Lanes**

**GET /lanes** *- get all lanes*

Return array of all lanes in JSON's format

Example:
```javascript
{
    "lanes": [
        {
            "_id": "5a3503c7a5f1048942d7caa",
            "id": "d45d1974-3264-4861-9749-e2ef54b379da",
            "name": "Lane name",
            "__v": 4,
            "notes": [
                {
                    "_id": "5a3298fe7a5f125642d7cab",
                    "id": "213d91b5-5ca9-47f0-a8b5-8dab12982b55",
                    "task": "task 1",
                    "__v": 0
                }
            ]
        }
    ]
}
```

**POST /lanes** *- add a lane* 

Input data format:
```javascript
{
    name: [alphanumeric] /* required */
}
```
Return saved lane in JSON's format

 **PUT /lanes** *- edit a lane*

Input data format:
```javascript
{
    id: [alphanumeric], /* required */
    name: [alphanumeric],
    notes: [array]
}
```
Return updated lane in JSON's format

**DELETE /lanes/:laneId** *- delete a lane*

Return deleted lane in JSON's format


### **Notes**  

**POST /notess** *- add a note to specified lane* 

Input data format:
```javascript
{
    id: [alphanumeric] 
    laneId: [alphanumeric] /* required */ 
    task: [alphanumeric] /* required */
}
```
Return saved note in JSON's format

**PUT /notes** *- edit a note*

Input data format:
```javascript
{
    id: [alphanumeric], /* required */
	task: [alphanumeric] /* required */
}
```
Return updated note in JSON's format

**DELETE /notes/:noteId** *- delete a note and delete it from specified lane too*

Return deleted note in JSON's format
