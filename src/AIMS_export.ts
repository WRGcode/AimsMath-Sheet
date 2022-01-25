export class AIMS {
  static pi = 3.14;
  /**
   * holds all formulas for volume and area of solids
   */
  static Solids = {
    /**
     * calcilates the volume of a right circular cone
     * @param {number} r the radius of the cone
     * @param {number} h the height of the cone
     * @returns {number} volume of the cone
     */
    coneVolume(r:number,h:number): number {
      return (AIMS.pi * r ** 2 * h) / 3
    },
    /**
     * calcilates the volume of a pyramid
     * @param {number} B area of base of the pyramid
     * @param {number} h the height of the pyramid
     * @returns {number} volume of the pyramid
     */
    pyramidVolume(B:number, h:number){
      return (B*h) / 3
    },
/**
 * calcilates the volume of a sphere
 * @param {number} r the radius of the sphere
 * @returns {number} volume of the sphere
 */
    sphereVolume(r:number){
      return 4* (AIMS.pi * r**3) / 3
    },
/**
 * calcilates the volume of a right circular cylinder
 * @param {number} r the radius of the cylinder
 * @param {number} h the height of the cylinder
 * @returns {number} volume of the cylinder
 */
    cylinderVolume(r:number,h:number){
      return (AIMS.pi * r**2 * h)
    },
/**
 * calcilates the volume of a right prism
 * @param {number} B area of base of the prism
 * @param {number} h the height of the prism
 * @returns {number} volume of the prism
 */
    prismVolume(B:number, h:number){
      return (B * h)
    },


  }
  /**
   * holds all formulas for Area
   */
  static Area = {
/**
 * calcilates the area of Triangle
 * @param {number} b the base of the Triangle
 * @param {number} h the height of the Triangle
 * @returns {number} the area of the Triangle
 */
    TriangleArea(b:number,h:number){
      return(b*h)/2
    },
/**
 * calcilates the area of Rectangle
 * @param {number} l the length of the Rectangle
 * @param {number} w the width of the Rectangle
 * @returns {number} the area of the Rectangle
 */
    RectangleArea(l:number,w:number){
      return(l*w)
    },
/**
 * calcilates the area of Trapezoid
 * @param {number} h the height of the Trapezoid
 * @param {number} b1 the first base of the Trapezoid
 * @param {number} b2 the second base of the Trapezoid
 * @returns {number} the area of the of the Trapezoid
 */
    TrapezoidArea(h:number,b1:number,b2:number){
      return(h * (b1 + b2)) /2
    },
/**
 * calcilates the area of Parallelogram
 * @param {number} b the base of the Parallelogram
 * @param {number} h the height of the Parallelogram
 * @returns {number} the area of the Parallelogram
 */
    ParallelogramArea(b:number,h:number){
      return(b*h)
    },
/**
 * calcilates the area of Circle
 * @param {number} r the radius of the Circle
 * @returns {number} the area of the Circle
 */
    CircleArea(r:number){
      return(AIMS.pi * r**2)
    }
  }
  /**
   * holds all formulas for Total Surface Area
   */
  static Surface_Area = {

    ConeSurface(){},
/**
 * calcilates the total Surface Area of a Pyramid
 * @param {number} B the area of base of the Pyramid
 * @param {number} P the perimeter of base of the Pyramid
 * @param {number} ℓ the slant height of the Pyramid
 * @returns {number} the Surface Area
 */
    PyramidSurface(B:number,P:number,ℓ:number){
      return(B + P * ℓ) / 2
    },
    /**
     * the total Surface Area of a Sphere
     * @param {number} r the radius of the Sphere
     * @returns {number} the Surface Area of the Sphere
     */
    SphereSurface(r:number){
      return(4*AIMS.pi*r**2)
    },
    /**
     *  the total Surface Area of a Cylinder
     * @param {number} r the radius of the Cylinder
     * @param {number} h the height of the Cylinder
     * @returns {number} the Surface Area of the Cylinder
     */
    CylinderSurface(r:number,h:number){
      return(2*AIMS.pi*r*h + 2*AIMS.pi*r**2)
    },
    /**
     * the total Surface Area of a Prism
     * @param {number} B the area of base of the Prism
     * @param {number} P the perimeter of base of the Prism
     * @param {number} h the height of the Prism
     * @returns {number} the Surface Area of the Prism
     */
    PrismSurface(B:number,P:number,h:number){
      return(2*B + P*h)
    }
  }
  /**
   * holds formulas for Linear Equation Forms
   */
  static Linear = {
/**
 * finds the slope given 2 points
 * @param {[number, number]} point1 the x, y coords of the point 1
 * @param {[number, number]} point2 the x, y coords of the point 2
 * @returns {number} the value of m where is the slope 
 */
    Point_Slope(point1:[number, number],point2:[number, number]){
      const [x1, y1] = point1
      const [x2, y2] = point2

      return (y1-y2)/(x1-x2)
    },
    /**
     * the Standard or General Form
     * @param {number} A the integer with x
     * @param {number} B the integer with y
     * @param {number} C the integer without x or y
     * @returns {string} this will show the Form
     */
    Standard(A:number,B:number,C:number){
  return(`${A}x + ${B}y = ${C}`)
    },

    // Intercept(){}
  }
  /**
   *holds the formula for Pythagorean Theorem
   */
  static Pythagorean = {

    /**
     * Pythagorean Theorem formula
     * @param {number} a one of the sides
     * @param {number} b the other side
     * @returns {number} the longest side squared
     */
    Pythagorean(a:number,b:number){
      return(a**2 + b**2)
    }
  }
  /**
   * holds all formulas for Coordinate Geometry
   */
  static Coordinate = {

    /**
     * the Distance between two points
     * @param {number} A Given: Points of A (x1, y1)
     * @param {number} B Given: Points of b (x2, y2)
     * @returns the Distance between the two points
     */
    Distance(A:[number,number],B:[number,number]){
      const [x1,y1] = A
      const [x2,y2] = B

      return (Math.sqrt((x1-x2)**2+(y1-y2)**2))
    },
 /**
     *the Midpoint between two points
     * @param {number} A Given: Points of A (x1, y1)
     * @param {number} B Given: Points of b (x2, y2)
     * @returns {string} the Midpoint between the two points
     */
    Midpoint(A:[number,number],B:[number,number]){
      const [x1,y1] = A
      const [x2,y2] = B
      
      return(`${(x2+x1)/2},${(y2+y1)/2}`)
    },
 /**
     *the Slope of line through two points
     * @param {number} A Given: Points of A (x1, y1)
     * @param {number} B Given: Points of b (x2, y2)
     * @returns {string} the Slope of line through the two points
     */
    Slope_through(A:[number,number],B:[number,number]){
      const [x1,y1] = A
      const [x2,y2] = B
      
      return(`${y2-y1}/${x2-x1}`)
    }
  }
/**
 * holds formulas for Quadratic Formula
 */
  static Quadratic = {

    Quadratic(){}
  }

}