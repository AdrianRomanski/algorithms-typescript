//You are given an array coordinates, coordinates[i] = [x, y], where [x, y]
// represents the coordinate of a point. Check if these points make a straight line in the XY plane.

//Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

//Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false



function checkStraightLine(c: number[][]): boolean {
    function checkSlope([x0,y0]: number[], [x1,y1]: number[], [x2,y2]: number[]) {
        if(x0 === x1 && x1 === x2) {
            return true;
        }
        if(y0 === y1 && y1 === y2) {
            return true;
        }
        return ((x1-x0)*(y2-y0))/((y1-y0)*(x2-x0)) === 1;
    }
    if(c.length === 2) {
        return true;
    }
    for(let i=2; i<c.length; i++) {
        if(!checkSlope(c[0],c[1], c[i])) {
            return false;
        }
    }
    return true;
}