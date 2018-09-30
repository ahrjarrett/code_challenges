(* 
   Source : https://www.hackerrank.com/challenges/fp-list-replication/problem 
   Author : Andrew Jarrett
   Date   : 2018-09-30
*)

let rec read_lines () =
    try let line = read_line () in
        int_of_string (line) :: read_lines()
    with
        End_of_file -> []

let rec repeat n value =
  if n = 0 then [] else value :: repeat (n-1) value

let rec f n lst =
  let res = match lst with
    | [] -> []
    | hd::tl -> repeat n hd @ f n tl
  in res;;

repeat 10 3
let result = f 2 [1;2;3];;

result


let () =
    let n::arr = read_lines() in
    let ans = f n arr in
    List.iter (fun x -> print_int x; print_newline ()) ans;;
                                                          
