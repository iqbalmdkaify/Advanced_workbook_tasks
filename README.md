# Task 4 Code Description

## Bisection Method
The bisection method is a numerical technique to find the root of a continuous function. It repeatedly divides an interval in half and selects the subinterval where the function changes sign, thus converging on the root.

### Terms Explained

1. **Convergence**
   The process of approaching a specific value (the root) as iterations progress. In the bisection method, it means that the interval \([a, b]\) containing the root gets progressively smaller, and the midpoint gets closer to the actual root with each iteration.

2. **Tolerance**
   The predefined threshold for acceptable accuracy of the root approximation. It is the maximum allowable difference between the actual root and the approximation. The method stops iterating when the interval width \(\frac{b - a}{2}\) is less than or equal to the tolerance, ensuring sufficient accuracy.

3. **MaxIterations**
   The maximum number of iterations the bisection method will perform. It prevents infinite loops in case the method does not converge within the desired tolerance. If the root is not found within the specified number of iterations, the algorithm stops and provides the best approximation obtained.

4. **a (Left Endpoint)**
   The starting point of the interval on the x-axis within which the root is being searched. It represents the lower bound of the interval \([a, b]\), chosen such that \(f(a)\) and \(f(b)\) have opposite signs, indicating a root exists between \(a\) and \(b\).

5. **b (Right Endpoint)**
   The ending point of the interval on the x-axis within which the root is being searched. It represents the upper bound of the interval \([a, b]\). Like \(a\), \(b\) is chosen so that \(f(a)\) and \(f(b)\) have opposite signs, ensuring a root exists within the interval.
