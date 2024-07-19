package NewBooking.onlinepackage.Controller;


import NewBooking.onlinepackage.Model.Student;
import NewBooking.onlinepackage.Service.StudentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@RequiredArgsConstructor
@CrossOrigin("*")
public class StudentController {

    private final StudentService studentService;

    @PostMapping("/student")
    public Student postStudent(@RequestBody Student student) {
        return studentService.postStudent(student);
    }

    @GetMapping("/get-student")
    public List<Student> getAllStudent() {
        return studentService.getAllStudent();
    }

    @DeleteMapping("/delete-student/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable Long id) {
        try {
            studentService.deleteStudent(id);
            return new ResponseEntity<>("Student with ID" + id + "deleted successfully", HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get-student/{id}")
    public ResponseEntity<?> getStudentById(@PathVariable long id) {
        Student student = studentService.getStudentById(id);
        if (student == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(student);
    }

    //    @PatchMapping("/update-student/{id}")
//    public ResponseEntity<?> updateStudent(@PathVariable long id, @RequestBody Student student){
//        Student updateStudent = studentService.updateStudent(id, student);
//
//        if(updateStudent == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
//        return  ResponseEntity.ok(updateStudent);
//
//    }
    @PutMapping("/update-student/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable long id, @RequestBody Student student) {
        System.out.println("Received request to update student with ID: " + id);
        System.out.println("Update data: " + student);

        Student updateStudent = studentService.updateStudent(id, student);
        if (updateStudent == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(updateStudent);
    }
}

