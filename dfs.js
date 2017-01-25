function Graph(adjList) {
	if (adjList)
	  return adjList;
	else return {};
}
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
	return set;
}

/*adjList = {0:[2],1:[3],2:[3,4],3:[5],4:[5],5:[5]};
var graph = new Graph(adjList);
dfsRec(graph,0);*/
/*adjList = {"a":['b','c'],"b":["a","d","e"],
            "c":["a","f"],"d":["b"], "e":["b","f"],
            "f":["c","e"]};
var graph = new Graph(adjList);
console.log(graph);
console.log(dfsRec(graph,"c"));*/
adjList = {0:[1,2],1:[2],2:[0,3],3:[2]};
var graph = new Graph(adjList);
console.log(graph);
console.log(dfsRec(graph,2));