package NewBooking.onlinepackage.Service;


import NewBooking.onlinepackage.Model.Student;
import NewBooking.onlinepackage.Repository.StudentRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public Student postStudent(Student student){
        return studentRepository.save(student);
    }

    public List<Student> getAllStudent(){
        return studentRepository.findAll();
    }

    public void deleteStudent(Long id){
        if (!studentRepository.existsById(id)){
            throw new EntityNotFoundException("Student with ID"+id+"not found");
        }

        studentRepository.deleteById(id);
    }

    public Student getStudentById(Long id){
        return  studentRepository.findById(id).orElse(null);
    }

public Student updateStudent(long id, Student student){
    Optional<Student> optionalStudent = studentRepository.findById(id);
    if (optionalStudent.isPresent()){
        Student existingStudent = optionalStudent.get();

        existingStudent.setEmail(student.getEmail());
        existingStudent.setUsername(student.getUsername());
        existingStudent.setPhone(student.getPhone());
        existingStudent.setAddress(student.getAddress());

        return studentRepository.save(existingStudent);
    }
    return null;
}

}
