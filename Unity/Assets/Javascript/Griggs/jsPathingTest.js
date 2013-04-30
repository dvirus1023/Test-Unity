#pragma strict
//
//var target: Transform;
//public var targetPosition: Vector3;
////The waypoint we are currently moving towards
//private var currentWaypoint: int = 0;
////The max distance from the AI to a waypoint for it to continue to the next waypoint
//public var nextWaypointDistance: float = 3;
////The calculated path
//public var path: Pathfinding.Path;
////The AI's speed per second
//public var speed: float = 100;
//
//var seeker: Seeker;
//var controller: CharacterController;
//
//function Start () {
//
//	 seeker = GetComponent(Seeker);
//	 controller = GetComponent(CharacterController);
//        
//    //Start a new path to the targetPosition, return the result to the OnPathComplete function
//    seeker.StartPath (transform.position,target.position, OnPathComplete);
//        
//}
//
//function FixedUpdate () {
//        if (path == null) {
//            //We have no path to move after yet
//            return;
//        }
//        
//        if (currentWaypoint >= path.vectorPath.Count) {
//            Debug.Log ("End Of Path Reached");
//            return;
//        }
//        
//        var dir: Vector3;
//        
//        //Direction to the next waypoint
//        dir = (path.vectorPath[currentWaypoint]-transform.position).normalized;
//        dir *= speed * Time.fixedDeltaTime;
//        controller.SimpleMove (dir);
//        
//        //Check if we are close enough to the next waypoint
//        //If we are, proceed to follow the next waypoint
//        if (Vector3.Distance (transform.position,path.vectorPath[currentWaypoint]) < nextWaypointDistance) {
//            currentWaypoint++;
//            return;
//        }
//    }
//
////Was a  path found?
//function OnPathComplete (p:Pathfinding.Path) {
//        print("Yey, we got a path back. Did it have an error? "+p.error);
//        
//        if (!p.error) {
//            path = p;
//            //Reset the waypoint counter
//            currentWaypoint = 0;
//        }
//        
//    }