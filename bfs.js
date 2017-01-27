function Graph(adjList) {
	if (adjList)
	  return adjList;
	else return {};
}
/*in actual graph would have this.adjList which gets updated
and we would access graph.adjLit[node] and not graph[node]
*/
/*Abbreviated form of graph*/

function bfs(graph, node, dest){
	//dest is required only when we want a path
	var Q=[],parent={};
	//for parent, a queue as opposed to a stack in dfs
	Q.push(node);parent[node] = null;
	while (Q.length!=0) {
		node = Q.shift();//equivalent to de-queue 
		var v;
		for (var i=0;i<graph[node].length;i++) {
			v = graph[node][i];
			if (parent[v]!==undefined)
				continue;
			parent[v] = node;
			Q.push(v);//equivalent to enqueue
		}
	}
	console.log(parent);
	return path(parent,dest);

	function path(parent,dest) {
		//backtrack to the starting node from the destination
		var curr = dest,path=[curr];
		while(parent[curr]!==null) {
			curr=parent[curr];
			path.push(curr);
		}
		return path.reverse().join("->");;
	}
}

adjList = {0:[2],1:[3,2],2:[3,4],3:[5],4:[5],5:[]};
var graph = new Graph(adjList);
console.log(bfs(graph,0,5));
console.log(bfs(graph,0,4));