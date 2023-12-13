public class Program
{
  public class ArraySorter
  {
    public int[] SortArray(int[] array)
    {
      int n = array.length;
      bool flag = false;

      for (int i = 1; i < n - 2; i++)
      {
        for (int j = 0; j < n - i - 1; j++)
        {
          if (array[j] > array[j + 1])
          {
            int temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            flag = true;
          }
        }

        if (flag == false)
        {
          break;
        }
      }

      return array;
    }
  }

  public static void Main(string[] args)
  {
    int[] array = { 34, 22, 10, 19, 17 };
    ArraySorter sorter = new ArraySorter();
    int[] sortedArray = sorter.SortArray(array);

    foreach (int item in sortedArray)
    {
      Console.WriteLine(item);
    }
  }
}



