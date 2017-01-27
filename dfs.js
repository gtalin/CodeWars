function Graph(adjList) {
	if (adjList)
	  return adjList;
	else return {};
}
/*in actual graph would have this.adjList which gets updated
and we would access graph.adjLit[node] and not graph[node]
*/
/*Abbreviated form of graph*/
function dfsRec(graph,u,set){
	if (set === undefined) {
		var set = [];}
	if (set.indexOf(u)==-1) set.push(u);
	console.log(u);
	for (var i=0;i<graph[u].length;i++) {
		if (set.indexOf(graph[u][i])!==-1) continue;
		else dfsRec(graph,graph[u][i],set);
	}
	//console.log(set);
	return set;
}


function dfsIter(graph,u) {
	var S=[],discovered = [];
	S.push(u);
	while(S.length!==0) {
		u = S.pop();
		if (discovered.indexOf(u)!==-1)
			continue;
		else {
			discovered.push(u);//label u as discovered
			var v;
			for (var i=0;i<graph[u].length;i++) {
				v = graph[u][i];
				S.push(v);
			}
		}
	}
	//console.log(S);
	return discovered;
}

/*Path through dfs is not the best way to do it
We should use bfs to find path in graph
*/
function dfsIterPath(graph,u,target) {
	var S=[],discovered = [],parent={};
	S.push(u);
	while(S.length!==0) {
		u = S.pop();
		if (discovered.indexOf(u)!==-1)
			continue;
		else {
			discovered.push(u);//label u as discovered
			var v;
			for (var i=0;i<graph[u].length;i++) {
				v = graph[u][i];
				S.push(v);parent[v]=u;
				if (v==target) break;
			}
		}
	}
	//console.log(S);
	function readPath(parent){
		console.log("enter the readPath to: ",target);
		console.log(JSON.stringify(parent));
		var curr = target;
		var path=[];
		while(curr!=undefined) {
			console.log(curr);path.push(curr);
			curr = parent[curr];
		}
		return path.reverse().join("->");
	}
	return readPath(parent);
}



//Tests
/*adjList = {0:[1,2],1:[2],2:[0,3],3:[2]};
var graph = new Graph(adjList);
console.log(graph);
console.log(dfsRec(graph,2));
console.log(dfsIter(graph,2));*/


adjList = {0:[2],1:[3,2],2:[3,4],3:[5],4:[5],5:[]};
var graph = new Graph(adjList);
//console.log(dfsRec(graph,0));
//console.log(dfsIter(graph,0));
console.log(dfsIterPath(graph,0,5));
console.log(dfsIterPath(graph,0,4));

//console.log(dfsRecPath(graph,0,4));
/*adjList = {"a":['b','c'],"b":["a","d","e"],
            "c":["a","f"],"d":["b"], "e":["b","f"],
            "f":["c","e"]};
var graph = new Graph(adjList);
console.log(graph);
console.log(dfsRec(graph,"c"));*/

