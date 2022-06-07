import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class AddAllNumbers {
	public static void main(String[] args) throws FileNotFoundException {
		 // pass the path to the file as a parameter
		System.out.println(System.getProperty("java.class.path"));

        //File file = new File(System.getProperty("user.dir")+"\\AddAllNumbers\\src\\input.txt");

		File file = new File(System.getProperty("java.class.path")+"\\input.txt");
        AddAllNumbers indx = new AddAllNumbers();
        
        Scanner sc = new Scanner(file);
			String T = sc.nextLine();
	        ArrayList<String> input = new ArrayList<String>();
	        
//			String T = "1";
//	        ArrayList<String> input = new ArrayList<String>();
//	        input.add(T);
//	        input.add("ab1231da");


	        //adds inputs to a list
	        for(int i=0; i<Integer.parseInt(T);i++){
	            input.add(sc.nextLine());
	        }
			sc.close();

	        //goes through list and apply logic
	        for(String print : input){
	            //System.out.println(print);
	            System.out.println(indx.addNumbersOnly(print));
	        }

	}

	public int addNumbersOnly(String str){
        int result = 0;
        String[] tokenList = str.split("");
    
        for(int i=0; i<tokenList.length;i++){
            if(Character.isDigit(tokenList[i].charAt(0))){
                //console.log('this is a number: ' + list[i]);
                result+= Integer.parseInt(tokenList[i]);
            } 
        }
        return result;
    }
}
