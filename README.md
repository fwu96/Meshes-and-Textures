# README file for Workbook (Assignment) 8

It is the student's responsibility to fill this in.
See <https://graphics.cs.wisc.edu/WP/cs559-sp2019/workbooks/#README_files>

## please answer these first three required questions "inline" (as in the instructions)

Name: Feifan Wu

WiscID: fwu62

GitHub Login: fwu96

## please answer these next (optional) questions on a line following the questions

Attributions:

https://freestocktextures.com/texture/old-blue-facade,1121.html
https://freestocktextures.com/texture/building-facade-with-nine-windows,860.html

Parts of the Assignment you did (or did not) do:

Did you do any bonus parts?

Did you add any texture or object files?

Notes to the Grader:
- Page 8-2
    - I made three objects which are made up by triangles
    - Each of them have four faces (I change the range of the slider so the objects can be rotated to make the backside face to the front)
    - The left one have a smooth across boundary on both front and back two connecting triangles
        - the color of front and back are different
    - The middle one set normal in each face individually
        - four faces have four different color
    - The right one set normal vector automatically
        - four faces have different colors and on each face, the color smoothly varying across the face
- Dice
    - I made two dices (with only one constructor)
    - Each dice have the texture which professor provided
    - Two diced are the same (the order of number) at beginning
    - Two diced show difference number at the top by rotating one of them
- Domino
    - I made six dominos that they are "stand" on the ground
    - The constructor only make one half of domino, a complete domino is made up by two half
    - Texture is used by professor provided
- Buildings
    - I made a building which have two pieces of roof (the left one)
    - I made a cross hipped building (the middle one)
    - I made a pyramid hip building (the right one)
    - There are two image textures I use for these three buildings which I found online (links are provided in the attribution)
        - The two-piece roof building and cross hipped building using the same texture `./Buildings/door_and_window.jpg`, but I choose different parts of the image to make the walls and roofs
        - The pyramid hip building using another texture `./Buildings/windows.jpg`.
- Car
    - I made a car by using the shape
        - The car have four wheels
        - The car have fenders above each wheel
        - The car have body with different color with fenders
        - The car have a driver's room
        - All the surface have "metal texture", while rotating the camera, you will see the metal reflection of lights