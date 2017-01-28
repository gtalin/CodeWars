function dijkstra(graph,source) {
	//based on wiki pseudocode
	//test data from geeks for geeks


	//form Q with all vertices. 
	//Keep track of distances and parents
	var Q=[],dist={},parent={};
	for (var i=0;i<graph.length;i++) {
		Q.push(i);
		dist[i] = Infinity;
		parent[i] = null;
	}

	//dist of source is 0
	dist[source] = 0;

	console.log(graph);
    //loop till list of vertices is not empty
	while(Q.length!==0) {
		//min dist node picked
		//then del it from Q
		console.log("Dist", dist);
		u = minObject(dist,Q);
		if (u===-1) break;
		console.log("Q",Q, "u",u);
		Q.splice(Q.indexOf(u),1);//remove node u from Q. 
		//It has index u in first run only

		console.log("After del u",Q);
		//all nodes from u such that they exist in Q
		//in adjacency matrix they're also all nodes in Q
		//some nodes with no connection will always have dist inf
		var alt,v;//alternate distance, v node for graph
		//Since Q reduces in size i can't be used as graph[u][i]
		//the initial direct mapping of Q and graph messed it up a bit
		for (var i=0;i<Q.length;i++) {
			v = Q[i]
			if (graph[u][v]!==0)//=== 0 values are not connected
			  alt = dist[u] + graph[u][v];//dist from u to i
			else continue;
			if (alt<dist[v]) {//if both distances Infinity this false
				dist[v] = alt;
				parent[v] = u;
			}
		}
		//break;
	}

	return [dist,parent];

	function minObject(dist,Q) {
		/*var min = Infinity, minDistKey=-1;
		for (key in dist) {
			//prseInt of key because key becomes string
			if (dist[key]<min && Q.indexOf(parseInt(key))!==-1)
				{min = dist[key];minDistKey=key;}
		}
		console.log("min Dist, ",min, " Key: ",minDistKey);
		return parseInt(minDistKey);*/
		
		var min = Infinity, u, minIx=-1;
		for (var i=0;i<Q.length;i++) {
			u = Q[i];
			if (dist[u]<min)
				{min=dist[u];minIx=u}
		}
		console.log("min Dist, ",min, " Key: ",minIx);
		return minIx;
	}

}

var graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
                      [4, 0, 8, 0, 0, 0, 0, 11, 0],
                      [0, 8, 0, 7, 0, 4, 0, 0, 2],
                      [0, 0, 7, 0, 9, 14, 0, 0, 0],
                      [0, 0, 0, 9, 0, 10, 0, 0, 0],
                      [0, 0, 4, 14, 10, 0, 2, 0, 0],
                      [0, 0, 0, 0, 0, 2, 0, 1, 6],
                      [8, 11, 0, 0, 0, 0, 1, 0, 7],
                      [0, 0, 2, 0, 0, 0, 6, 7, 0]
                     ];

console.log(dijkstra(graph,0));
/*This algo can be used for min dist between two nodes. 
After u = minObject(dist,Q); We check if u is our target node
If so we break there and instead of returning dist array we
just return dist[u]
*/
/*we're assuming our graph is in an adjacency matrix form.
it's easily converstible to adjacency list 
{0:[{2:6},{3:1}], 2:[{3:5}]} inseatd of {0:[2,3],2:[3]}
which we had used for dfs and bfs etc.
Or if it was a small graph we could use adjacency matrix
and just have a conversion for nodes, in matrix nodes are
from 0 to n in real could be a to b or name of fruits etc
So could just keep that mapping
*/
/*had written dist[i] and parent[i] in the inner loop (for)
because of confusion with indices of graph and Q 
being the same initially. As a result I assumed direct 
mapping and forgot we're reducing size of Q and becuase 
of that the mapping will not hold
*/
