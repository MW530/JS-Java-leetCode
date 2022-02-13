typedef struct {
    int small;
    int medium;
    int big;
} ParkingSystem;


ParkingSystem* parkingSystemCreate(int big, int medium, int small) {
    ParkingSystem *obj = (ParkingSystem *)calloc(1, sizeof(ParkingSystem));
    obj->big = big;
    obj->medium = medium;
    obj->small = small;
    return obj;
}

bool parkingSystemAddCar(ParkingSystem* obj, int carType) {
    switch(carType){
        case 1:
            return --(obj->big) >= 0 ? true : false;
        case 2:
            return --(obj->medium) >= 0 ? true : false;
        case 3:
            return --(obj->small) >= 0 ? true : false;
    }
    return false;
}

void parkingSystemFree(ParkingSystem* obj) {
    free(obj);
}

/**
 * Your ParkingSystem struct will be instantiated and called as such:
 * ParkingSystem* obj = parkingSystemCreate(big, medium, small);
 * bool param_1 = parkingSystemAddCar(obj, carType);
 
 * parkingSystemFree(obj);
*/
