export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        // console.info('arr[i]: ' + arr[i])
        for (let j = 0; j < arr.length-1-i; j++) {
            // console.info('  arr[j]: ' + arr[j])
            if (arr[j] > arr[j+1]) {
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        // break
        console.log(arr)

    }

}


bubble_sort([5,4,3,2,1])